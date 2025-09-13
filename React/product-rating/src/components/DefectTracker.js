import '../css/DefectTracker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DefectTracker() {
    return(
        <div className="container">
            <div className="row">
                <p className="h1">Defect Tracker</p>
                <a className="textlink" href={'/logout'}>Logout</a><br></br>
                <a className="textlink" href={'/logout'}>Add Defect</a>
                <a className="textlink" href={'/logout'}>View Defect</a>
                <div className="container filter">
                    <p className="h3">Filter Details</p>
                    <div className="dropdown">
                        <span className="h6">Priority</span>
                        <button type="button" className="btn btn-secondary dropdown-toggle" href={"/"}  data-bs-toggle={"dropdown"}
                        aria-expanded="false">All</button>
                        <ul className={"dropdown-menu"}>
                            <li><a className={"dropdown-item"} href={"/"}>1</a></li>
                            <li><a className={"dropdown-item"} href={"/"}>2</a></li>
                            <li><a className="dropdown-item" href={"/"}>3</a></li>
                        </ul>
                    </div><br></br>
                    <div className="dropdown">
                        <span className="h6">Category</span>
                        <button type="button" className="btn btn-secondary dropdown-toggle" href={"/"}  data-bs-toggle={"dropdown"}
                        aria-expanded="false">All</button>
                        <ul className={"dropdown-menu"}>
                            <li><a className={"dropdown-item"} href={"/"}>1</a></li>
                            <li><a className={"dropdown-item"} href={"/"}>2</a></li>
                            <li><a className="dropdown-item" href={"/"}>3</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{paddingTop:"1.5rem"}}>
                    <p className="h3">Defect Details</p>
                    <p style={{color:"red", fontSize:"14px"}}>Search Results: 3</p>
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
                            <tr>
                                <td>UI</td>
                                <td>Submit button coming to extremem left</td>
                                <td>2</td>
                                <td>open</td>
                                <td><a className="textlink" href={"/"}>Close Defect</a></td>
                            </tr>
                            <tr>
                                <td>Functional</td>
                                <td>After submitting the form a confirmation popup must appear</td>
                                <td>1</td>
                                <td>open</td>
                                <td><a className="textlink" href={"/"}>Close Defect</a></td>
                            </tr>
                            <tr>
                                <td>Chaneg Request</td>
                                <td>Add remove user functionality</td>
                                <td>2</td>
                                <td>closed</td>
                                <td style={{color:"grey"}}>No acction pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DefectTracker;