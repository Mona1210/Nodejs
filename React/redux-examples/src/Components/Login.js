import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { loginValidate } from "../Actions/Action";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch(); // Since loginValidate is in another js file, define useDispatch and then dispatch action
    const authenticated = useSelector(state=> state.LoginReducer.isAuthed);// get the isAuth value in reducer 
    console.log('authenticated' +authenticated);
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        let data;
        e.preventDefault();
        if((name === "") || (pwd === "")) {
            setMessage("Enter the credentials");
        } else {
            setMessage("");
            data = {username:name, password:pwd};
            // on dispatch of login Validate -> if creds match dispatch login -> this sets type, isAuthenticated
            // The type is matched in LoginReducer to set isAuthed, state is updated
            // The updated state is then fetched in line #9
            dispatch(loginValidate(data));
        }
    }
    return(
        <>
        <form onSubmit={handleLogin}>
            <h1>{authenticated}</h1><br></br>
            <h2>Login</h2><br></br>
            <div className="form-group">
                <label>Username : </label>
                <input type="text" className="form-control" style={{width:'40%'}}
                    onChange={(e) => setName(e.target.value)} placeholder="username"/><br></br>
            </div>
            <div className="form-group">
                <label>Password : </label>
                <input type="password" className="form-control" style={{width:'40%'}}
                    onChange={(e)=> setPwd(e.target.value)} placeholder="password"/>
            </div>
            <div className="text-danger">{message}</div>
            {authenticated===false? <div className="text-danger">Invalid Credentials</div>:null}<br></br>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        {authenticated===true? <Navigate to="/counter"/>:null}
        </>
    )
}
export default Login;