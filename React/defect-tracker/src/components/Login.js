import {useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {useNavigate} from "react-router-dom";
import ViewTracker from "./ViewTracker";

function Login() {
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");
    const [msg, setMsg] = useState("");
    const [success, setSuccess] = useState(false);
    
    useEffect(()=> {
        axios.get("http://localhost:4000/users")
        .then(res=>{
            setUsers(res.data);
        })
    },[]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(uname==="" || pwd===""){
            setMsg("Enter the credentials");
        } else {
            let userData = users.find(
                function(el) {
                    return el.user == uname;
                }
            );
            console.log("userData - " +userData);
            if(userData ==={} || userData == null){
                setMsg("Login Failed")
                setSuccess(false);
            } else if(userData.pwd !== pwd){
                setMsg("Incorrect credentials");
                setSuccess(false);
            } else {
                setSuccess(true);
                setMsg("Login Successful!");
                //navigate("/dashboard");
            }
        }
    }
    return(
        <>
        <div style={{width:"60%"}} className="container">
            <h3>Defect Tracker</h3><br></br>
            <div className="login"><b>Login</b></div><br></br>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <label>Username : </label>
                    <input className="inputfield" type="text" value={uname} id="username"
                        placeholder="Enter Username" onChange={(e)=>setUname(e.target.value)}/>
                </div> <br></br>
                <div>
                    <label>Password : </label>
                    <input className="inputfield" type="password" value={pwd} id="password"
                        placeholder="Password" onChange={(e)=>setPwd(e.target.value)}/>
                </div><br></br>
                <button type="submit">Submit</button>
                {success? (
                    <div className="text-success">{msg}</div>
                ):(
                    <div className="text-danger">{msg}</div>
                )}
            </form>
        </div>
        {/*<ViewTracker role={uname} login={success}/>*/}
        </>
    )
}

export default Login;
