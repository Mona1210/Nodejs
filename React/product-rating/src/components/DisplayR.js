import { useParams } from "react-router-dom";

const DisplayR = () => {
    let params = useParams();
    return (
        <>
            <h2>Inside {params.topic} component</h2>
        </>
    )
}
export default DisplayR;