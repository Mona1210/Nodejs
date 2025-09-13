import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
import {useState} from "react";

function LoginForm() {
    const [status, setStatus] = useState(null);
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!data.username || !data.password) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    };

    const handleChange = (event) => {
        let {name, value} = event.target; // name here signifies teh name attribute in input field ie username, password
        console.log ('name' +name +'value' +value);
        setData({...data, [name]:value});
        console.log('data - ' +data);
    }
    return(
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">UserName : </label>
                        <input style={{width:"40%"}} type="text" className="form-control" id="name"
                        placeholder="Enter your username" name="username"
                        value={data.username} onChange={handleChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password : </label>
                        <input style={{width: "40%"}} type="password" className="form-control"
                        id="pwd" placeholder="Enter password" name="password"
                        value={data.password} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    {status===false && <div className="text-danger"> Enter the fields</div>}
                    {status === true && <div className="text-success">Login Successsful!</div>}
                </form>
            </div>
        </>
    )
}

export default LoginForm;