import {useSelector, useDispatch} from "react-redux";
import { increment, decrement } from "../Actions/Action";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
    const counter = useSelector(state=> state.CounterReducer.count);
    const dispatch = useDispatch();
    return(
        <>
            <h1>{counter>0? counter:0}</h1>
            <button className="btn btn-primary" onClick={()=>dispatch(increment())}>Increment</button>&nbsp;
            <button className="btn btn-primary" onClick={()=> dispatch(decrement())}>Decrement</button>
        </>
    )
}
export default Counter;