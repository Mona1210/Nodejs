/**
 * State and Props - to bind data to component
 * useState - hook used to associate state with components
 * Used to initialize/add state value, helps to preserve state value of component
 * const [count, setCount] = useState(0);
 *  -> count is state variable initialized with 0
 *  -> setCount is function used to update state count
 *
 * useState takess "initialState" as initial value and returns 2 values
 */

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeChild from "./EmployeeChild";

function StateProps() {
  // State update using useState()
  const [name, setName] = useState("Jack");

  //State Update using event handler
  const [age, setAge] = useState("20");
  const handleChange = () => {
    setAge("25");
  };

  //Exercise
  const [counter, setCounter] = useState(0);
  const [employees, setEmployees] = useState([
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]);

  const addEmployee = () => {
    setEmployees([
      ...employees,
      { empId: 6789, name: "Sam", designation: "TL" },
    ]);
  };

  /**
   * Props used to pass data from parent to child component
   * Eg <App data= {10}/>
   * -> Property data is passed with value 10 to App component
   * They are passed as arguments to functional components
   * Immutable - Child comp cannot modify props. When parent updates data, child gets updated props
   * When props are updated, comp gets re rendered and displays latest value
   */
  return (
    <div>
      Your name is: {name} <br></br>
      Your age is: {age} <br></br>
      <button onClick={() => setName("Tom")}>Change Name</button>
      <button onClick={handleChange}>Change Age</button> <br></br>
      Counter: {counter} <br></br>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(() => counter + 1)}
      >
        Increment
      </button>
      <br></br>
      <table style={{ width: "60%" }} className="table">
        <thead className="thead-light">
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addEmployee}>
        {" "}
        Add an Employee
      </button>
    </div>
  );
}

export default StateProps;
