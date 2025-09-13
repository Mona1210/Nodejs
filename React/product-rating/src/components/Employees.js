import { useState } from "react";
import EmployeeChild from './EmployeeChild';

const Employees = () => {
    const [employees, setEmployees] = useState([
        { empId: 1234, name: "John", designation: "SE" },
        { empId: 4567, name: "Tom", designation: "SSE" },
        { empId: 8910, name: "Kevin", designation: "TA" },
    ]);

    // function to add employee present in Parent
    const addEmployee = () => {
        setEmployees([...employees, {empId:6789, name:"Samuel", designation:"TL"}]);
    }

    /**
     * Parent to Child -> import child comp (EmployeeChild) in parent
     * <Child varname={value}/>
     * return (
        <EmployeeChild employees={employees}/>
    )
     */
    // Sending multiple values
    // methods can also be sent as props - addEmployee
    return (
        <EmployeeChild name={"Mona"} employees={employees} addEmployee={addEmployee}/>
    )

}
export default Employees;