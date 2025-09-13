import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function AxiosGetUsers() {
    const [id, setId] = useState();
    const [post, setPost] = useState({});

    const fetchData = ()=> {
        axios.get("http://localhost:4000/users/"+id)
        .then(result=>{
            console.log("result" +result);
            setPost(result.data.post);
        })
        .catch(error => {
            console.log(error);
        })
    };

    useEffect(()=>{
        fetchData();
    }, []);

    const handleSubmit = (event) =>{
        event.preventDefault();
        fetchData();
    };

    return (
        <div className="container" style={{padding:"15px"}}>
            <form onSubmit={handleSubmit}>
                <br></br>
                <h4>Enter User Id</h4>
                <br></br>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <button type="submit" className="btn btn-secondary">Search</button>
            </form>
            <br></br>
            <div>
                Employee Name: {post.name}<br></br>
                Employee Designation: {post.designation}
            </div>
        </div>
    )
}

export default AxiosGetUsers;