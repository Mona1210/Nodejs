import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function AxiosGetEx() {
    const [employees, setEmployees] = useState([]);
    const addEmployee = () => {
        setEmployees([...employees, { empId: 6789, name: "Sam", designation: "TL" }]);
    };

    useEffect(()=>{
        axios.get('employees.json')
        .then(result=>{
            console.log("result" +result);
            setEmployees(result.data); // jsetting the response using state function setEmployees
        })
        .catch(error =>{
            console.log("error");
        })
    }, []);
    
    return(
        <>
            <table style={{width:"60%"}} className="table">
                <thead className="thead-light">
                    <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => {
                        return(
                            <tr>
                                <td>{employee.empId}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addEmployee}>Add an Employee</button>
        </>
    )
}

export default AxiosGetEx;