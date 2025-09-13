import {Link, Outlet} from "react-router-dom";
import "../css/ViewTracker.css";

const Header = () => {
    return (
        <nav>
            <Link className= "textlink" to="/dashboard">View Defects</Link> &nbsp;
            <Link className= "textlink" to="/adddefect">Add Defects</Link>
            <Outlet/>
        </nav>
        
    )
}
export default Header;