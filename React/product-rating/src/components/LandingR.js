import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import DisplayR from "./DisplayR"


const LandingR = () => {
    let params = useParams();
    console.log("params - " +JSON.stringify(params));
    return (
        <>
            <h4>Welcome&nbsp; {params.name} to UI courses!</h4>
            <h3>Just Launched...</h3>
            <Link to="display/angular">Angular</Link><br></br>
            <Link to="display/react">React</Link><br></br>
            <Link to="display/express">Express</Link><br></br>
            <Link to="display/vue">Vue</Link><br></br>
            <Routes>
                <Route path="display/:topic" element={<DisplayR/>}/>
            </Routes>
        </>
    )
}
export default LandingR;