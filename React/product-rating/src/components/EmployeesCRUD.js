import React, {useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployeesCRUD = () => {
    const [employees, setEmployees] = useState([]); // main array that holds the employees result
    const [addFlag, setAddFlag] = useState(false); // flag that checks wwhether addEmployee is clicked
    const [updateFlag, setUpdateFlag] = useState(false); // flag that checks wwhether addEmployee is clicked
    const [name, setName] = useState(""); // name of employee to be added, value field in <input>
    const [designation, setDesignation] = useState(""); // designation of employee to be added, value field in <input>
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");
    const [empToBeUpdated, setEmpToBeUpdated] = useState({id:0, name:"", designation:""}); // employee details to be updated
    const [updateMsg, setUpdateMsg] = useState("");

    // Initial get service called within useEffect with param [] => get is called just once
    useEffect(() => {
        console.log("useeffect called" );
        axios.get ("http://localhost:4000/employees")
        .then(res => {
            setEmployees(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    const resetValues = () => {
        setName("");
        setDesignation("");
        setSuccess("");
    }
    // Post call to add employee details => pass event as parameter
    const addEmployee = (e) => {
        console.log("Inside addEmployee");
        e.preventDefault(); // call this method in add/delete/update
        if(name=== "" || designation==="") { // value attributes from add employee form <input> fields, cannot be ""
            setMessage("Enter the employee details");
        } else {
            setMessage("");
            setAddFlag(false);
            let newEmployee = {name: name, designation: designation}; // craeted obj for newly added emp
            axios.post('http://localhost:4000/employees', newEmployee)
            .then(res => {
                setEmployees([...employees, res.data]); // res will have the newly added object which is to be added to employees array
                // [...employees, res.data] => it gets added to existing array
                // since res is added to data set, no need to call get service again
                setSuccess("Employee added successfully")
            })
            .catch(error => {
                console.log(error);
            });
        }
        console.log("employees - addEmployee" +employees);
    }

    const deleteEmployee = (id) => { // The emp id to be deleted should be passed
        setSuccess("");
        axios.delete('http://localhost:4000/employees/'+id) // only deletes the emp object with empid = id
        .then(res => {
            axios.get('http://localhost:4000/employees') // call get service to fetch the new array of emp
            .then (res => {
                setEmployees(res.data);// set the result in employees state
            })
        });
    }

    const findEmployee = (id) => { // function to find the employee to be updated
        let emp = employees.find( //.find executes the specified function for each element of the array
            function(el) {
                console.log("el-" +el); // each element (emp) in array is passed as el and the iel.d is 
                // checked against id passed in findEmployee function
                return el.id == id; // returns the element which has same id
            }
        )
        console.log(emp); // emp var has the original values of the emp to be updated
        setEmpToBeUpdated(emp); // set the original values in setEmpToBeUpdated
    }

    const updateEmployee = (e) => { // Put call to update employee, pass event as parameter
        e.preventDefault();
        console.log("empToBeUpdated - " +empToBeUpdated);
        // empToBeUpdated will have new values of name, desig enetered through input fields
        axios.put("http://localhost:4000/employees/"+empToBeUpdated.id, empToBeUpdated)
        .then(res => {
            console.log(res.data); //  res will not have the updated array, so need to call get again
            axios.get("http://localhost:4000/employees")
            .then (res => {
                setEmployees(res.data);
            })
            setUpdateMsg("Employee updated successfully");
        })
        .catch(error => {
            console.log(error);
            setUpdateMsg("Something went wrong");
        })
    }

    return(
        <>
        <table style={{width:"60%"}} className="table table-bordered">
            <thead>
                <tr>
                    <th>EmpID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{/* When displaying in table format, always give key={unique id}, each row should have unique id hence put in tr*/}
                {/* {condition? ():()} */}
                {employees.length > 0? ( 
                    employees.map(employee => {
                        return(
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                                {/* Pass empid in delete func; Always call the func in onClick as below
                                onClick={()=>delete()} and NOT onClick={delete()}*/}
                                <td><button onClick={() => deleteEmployee(employee.id)}><i className="fa fa-trash"></i></button></td>
                            </tr>
                        )
                    })
                ) : (
                    <div>No Data Found</div>
                )}
            </tbody>
        </table>
        {/* To pass multiple functions onClick={()=> {funct1(); funct2()}}*/}
        <button className="btn btn-primary" onClick={() => {setAddFlag(!addFlag); resetValues()}}>Add Employee</button>
        <button className="btn btn-secondary" onClick={() => {setUpdateFlag(!updateFlag); resetValues()}}>Update Employee</button>
        <div className="text-success">{success}</div>
        {addFlag ? (
            <form>{/* Always pass event in onChange ; value attr should have the state name which holds this value*/}
                Employee Name: <input type="text" className="form-control" value={name}
                    onChange={(e) => {setName(e.target.value); setMessage("")}}/> <br></br>
                Designation: <input type="text" className="form-control" value={designation}
                    onChange={(e) => {setDesignation(e.target.value); setMessage("")}}/> <br></br>
                    <button type="submit" className="btn btn-primary" onClick={(e) => {addEmployee(e)}}>Add</button>
                    <div className="text-danger">{message}</div>
            </form>
        ) : null}
        {updateFlag? (
            <form>
                <p>
                    Employee ID <br></br>
                    {/* On selecting empid from drop down, findEmployee should be triggered */}
                    <select onChange={(e)=> {findEmployee(e.target.value)}}> 
                        <option value="">Select</option>
                        {/* key attribute should always be defined when displaying array */}
                        {employees.map(employee => {
                            return(
                                <option value={employee.id} key={employee.id}>{employee.id}</option>
                            )
                        })}
                    </select>
                </p>
                <p>
                    Name <br></br>
                    {/*{...empToBeUpdated, name: e.target.value} => sets the name attribute in empToBeUpdated obj
                     Since empToBeUpdated has just one entry, the corresp name attr will be updated
                     This is different to [...empToBeUpdated, res] => res gets ADDED to existing array*/}
                    <input type="text" className="form-control" value={empToBeUpdated.name}
                        onChange={(e) => {setEmpToBeUpdated({...empToBeUpdated, name: e.target.value})}}/>
                </p>
                <p>
                    Designation<br></br>
                    <input type="text" className="form-control" value={empToBeUpdated.designation}
                        onChange={(e) => {setEmpToBeUpdated({...empToBeUpdated, designation: e.target.value})}}/>
                </p>
                <button className="btn btn-secondary" onClick={(e)=> {updateEmployee(e)}}>Update</button>
            </form>
        ): null}
        <p>{updateMsg}</p>
        </>
    )
}

export default EmployeesCRUD;
