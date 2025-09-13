import Content from "./Content";

function ChildrenEx() {
    // When we donot know the children ahaead of time, special prop called children can be used
    //using children, we can pass children elements into output directly
    return(
        <>
        <Content>
            <div className="card" style={{width:"18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Welcome</h5>
                    <p className="card-text">Thank you for visiting our website</p>
                </div>
            </div>
        </Content><br></br>
        <Content>
            <div className="card" style={{width:"18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Do you wish to continue</h5>
                    <p className="card-text">Join Us!</p>
                </div>
            </div>
        </Content>
        </>
    )
}

export default ChildrenEx;