import "../css/AddDefect.css";
import {useState, useEffect} from "react";
import axios from "axios";
import "../App.css";
import Header from "./Header";

const AddDefect = () => {
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("");
    const [selData, setSelData] = useState({cat:"", prio:"", desc:""});
    let role= "tester";
    let headerFlag = false;
    if(role === "tester") {
        headerFlag = true;
    }
    
    useEffect(()=> {
        console.log("Inside useeffect");
        fetchData();
    },[]);

    const fetchData = () =>{
        console.log("Inside Fetch data");
        axios.get("http://localhost:4000/category")
        .then(res => {
            console.log(res.data);
            setCategory(res.data);
        });
        axios.get("http://localhost:4000/priority")
        .then(res=>{
            setPriority(res.data);
        });
    }

    return(
        <>
            <div className="container" style={{width:"60%"}}>
                <div className="row">
                    <h1>Defect Tracker</h1>
                    <a className="textlink" href="/logout">Logout</a>
                    {headerFlag? (
                        <Header></Header>
                    ):(null)}<br></br>
                    <div>
                        <div className="login"><b>Add Defects</b></div><br></br>
                        <div style={{width:"80%"}}>
                            <span>Defect Category</span>&nbsp;<select onChange={(e)=>{setSelData({...selData, cat: e.target.value})}}>
                                {category.map(cat=>{
                                    return(
                                        <option key={cat} value={cat}>{cat}</option>
                                    )
                                })}
                            </select><br></br><br></br>
                            <span>Description</span>&nbsp;
                            <textarea placeholder="Enter text here" onChange={(e)=> {setSelData({...selData, desc: e.target.value})}}/><br></br><br></br>
                            <span>Priority</span>&nbsp;<select onChange={(e) => {setSelData({...selData, prio:e.target.value})}}>
                                {priority.map(prior => {
                                    return(
                                        <option key={prior} value={prior}>{prior}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AddDefect;