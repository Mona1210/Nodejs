
function Conditions() {
    let element = null;
    let isLoggedIn = true;

    // using if - else
    if(isLoggedIn) {
        element = <h2>Welcome Mona!</h2>
    } else {
        element = <h2>Please Login</h2>
    }
    /*return(
        <>
        {element}
        </>
    )*/

    // using ternary operatr
        /*return(
            isLoggedIn?<h2>Welcome</h2> : <h2>Login</h2>
        )*/
    
        var employees = [
            {empId:1234, name:"John", designation: "SE"},
            {empId:4567, name:"Tom", designation: "SSE"},
            {empId:8910, name:"Kevin", designation: "TA"}
        ];
        return(
            <>
            <table>
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>EmpName</th>
                        <th>EmpDesignation</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee)=>{
                        return (
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                            </tr>
                        )
                        // Keys are used by react to identify items that are added/modified. 
                        //Keys should be provided to elements inside array to provide unique identity
                    })}
                </tbody>
            </table>
            </>
        )
}

export default Conditions;