import {useState, useEffect} from "react";
import axios from "axios";
import '../css/ViewTracker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

function ViewTracker() {

    const [defects, setDefects] = useState([]);
    const [defectsCopy, setDefectsCopy] = useState([]);
    const [priority, setPriority] = useState([]);
    const [category, setCategory] = useState([]);
    const [filterData, setFilterData] = useState({priority:"All", category:"All"});
    const [addFlag, setAddFlag] = useState(false);
    let headerFlag = false;
    let role = "tester";
    if (role === "tester") {
        headerFlag = true;
    }

    const fetchData = () => {
        axios.get("http://localhost:4000/defects")
        .then(res => {
            console.log("result" +res.data);
            setDefects(res.data);
            setDefectsCopy(res.data);
        })
        .catch(error=> {
            console.log(error);
        });
        axios.get("http://localhost:4000/priority")
        .then(res=>{
            setPriority(res.data);
        });
        axios.get("http://localhost:4000/category")
        .then(res=>{
            setCategory(res.data);
        });
    }

    useEffect(()=> {
        fetchData();
    }, []);

    const filterDefects = (val) =>{
        //e..preventDefault();
        console.log("Inside FilterDefects");
        console.log("priorSel - " +val.priority);
        console.log("catSel - " +val.category);
        let filteredDefects = [];
        console.log("defectsCopy length - " +defectsCopy.length);
        if(val.priority === "All" && val.category === "All") {
            filteredDefects = [...defectsCopy];
        } else {
            for (let i=0; i<defectsCopy.length; i++) {
                if((defectsCopy[i].priority === val.priority)) {
                    filteredDefects.push(defectsCopy[i]);
                }
                if((defectsCopy[i].category === val.category)) {
                    filteredDefects.push(defectsCopy[i]);
                }
            }
        }
            
        console.log("filteredDefects length - " +filteredDefects.length);
        setDefects([...filteredDefects]);
        
        console.log("Defecst length - " +defects.length);
    }

    return(
        <>
        <div className="container">
        <div className="row">
            <p className="h1">Defect Tracker</p>
            <a className="textlink" href={'/logout'}>Logout</a><br></br>
            {/*<a className="textlink" href={'/logout'}>Add Defect</a>
            <a className="textlink" href={'/logout'}>View Defect</a>*/}
            {headerFlag?(<Header></Header>):(null)}
            <div className="container filter">
                <p className="h3">Filter Details</p>                    
                <div className="select">
                    <span className="h6">Priority</span>
                    <select onChange={(e)=>{filterDefects({...filterData, priority: e.target.value})}}>
                        {priority.map(prior => {
                            return(
                                <option value={prior} key={prior}>{prior}</option>
                            )
                        })}
                    </select>
                </div>
                <br></br>
                <div className="select">
                    <span className="h6">Category</span>
                    <select onChange={(e)=>{filterDefects({...filterData, category: e.target.value})}}>
                        {category.map(cat=>{
                            return(
                                <option value={cat} key={cat}>{cat}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            {!addFlag? 
            (<div style={{paddingTop:"1.5rem"}}>
                <p className="h3">Defect Details</p>
                <p style={{color:"red", fontSize:"14px"}}>Search Results: {defects.length}</p>
                <table className="table table-bordered center">
                    <thead className="tableHeading">
                        <tr>
                            <th>Defect Category</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody className="tableBg">
                        {defects.map(defect => {
                            return (
                                <tr>
                                    <td>{defect.category}</td>
                                    <td>{defect.desc}</td>
                                    <td>{defect.priority}</td>
                                    <td>{defect.status}</td>
                                    <td><a className="textlink" href={"/"}>{defect.change}</a></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>):
            (null)}
        </div>
    </div>
    </>
    );
}

export default ViewTracker;