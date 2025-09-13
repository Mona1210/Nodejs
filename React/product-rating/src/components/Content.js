import React from "react";

var count =0;
function Content({children}) {
    // Content component can access data using children prop
    // React.Children =>utilities to deal with children
    // React.Children.map => to iterate on children
    // For every child the function is invoked
    React.Children.map(children,()=> {
        console.log("child", count++);
    });
    return(
        <>
        {children}
        </>
    )
}

export default Content;