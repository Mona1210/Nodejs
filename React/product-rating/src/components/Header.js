import React from "react";
import {Link, Outlet} from "react-router-dom";

const Header = () => {
    return(
        <nav>
            <Link to="home">Home</Link>|
            <Link to="about">About</Link>|
            <Link to="contact">Contact</Link>
            <Outlet/>
        </nav>
    )
}
export default Header;