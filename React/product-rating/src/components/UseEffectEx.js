import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function UseEffectEx() {
    const [name, setName] = useState("Jack");
    const [age, setAge] = useState(20);

    // useEffect is called for load of component and for each update of state
    /*useEffect(()=> {
        console.log("use Effect called");
    });*/

    // useEffect is called only at load of component
    /*useEffect(()=> {
        console.log("use Effect called");
    }, []);*/

    // useEffect is called for load of component and for each update of "age" state
    useEffect(()=> {
        console.log("use Effect called");
    }, [age]);

    return (
        <div>
            <h1>Your name is: {name}</h1> <br></br>
            <h1>Your age is: {age}</h1><br></br>

            <button className="btn btn-primary" onClick={()=>setName("Tom")}>Change Name</button>
            <button className="btn btn-primary" onClick={()=>setAge(age+1)}>Increment Age</button>
        </div>
    )
}

export default UseEffectEx;