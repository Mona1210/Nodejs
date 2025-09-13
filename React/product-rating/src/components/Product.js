import React from "react";
import Rater from "./Rater.js";
import '../App.css' ;
import "bootstrap/dist/css/bootstrap.min.css";

function Product() {
    let name = {
        firstName: "John",
        lastName: "Laptops"
    }

    let highlight = {
        color: "blue",
        backgroundColor: "grey"
    }
    var x=25, y=30;
    return (
        <div className="thumbnail" style={{textAlign:"center"}}>
            <h1 style={highlight}>{name.firstName} {name.lastName}</h1>
            <h3>{x}{">"}{y} {":"} {x>y?'True':'False'} </h3>
            <div className="row">
                <div className="col-sm-6">
                    <img src={"images/images.jpg"} alt="laptop" className="img img-rounded img-responsive"/>
                </div>
                <div className="col-sm-6">
                    <div className="caption">
                        <a href={"/productDetails"}>
                            <h3>Gamia Laptop</h3>
                        </a>
                        <h4>
                            <span style={{color:"red"}}>Rs. 33,0000</span>
                        </h4>
                        <p>An excellent choice for an awesome gaming expeience.</p>
                        <Rater/>
                        <span style={{fontSize:"9px"}}>3/5 stars</span>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Product;