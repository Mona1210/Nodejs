import "bootstrap/dist/css/bootstrap.min.css";

const EmployeeChild = ({employees, name, addEmployee}) => {
    // can get the props directly or using props
    // const EmployeeChild = (props)
    // while fetching teh values through map -> props.employees.map 
    return(
        <>
            <p>{name}</p>
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
                        return (
                            <tr>
                                <td>{employee.empId}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* Demo for Child to Parent 
            The method definition is present in parent. Onclick iof button in child,
            method in parent is invoked*/}
            <button className="btn btn-primary" onClick={addEmployee}>Add an Employee</button>
        </>
    );
}

export default EmployeeChild;