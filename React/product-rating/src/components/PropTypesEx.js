import propTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";

function PropTypesEx(props) {
    return (
        <>
            <div className="card w-25">
                <div className="card-body">
                    <h5 className="card-title">{props.productName} - {props.colors}</h5>
                    <p className='card-text'>Price: {props.price}</p>
                    {props.availability? null: <p className="text-danger">Product out of stock</p>}
                    <p>Rating: {props.feedback.rating}</p>
                    <button className="btn btn-primary" onClick={props.addToCart}>Add to Cart</button>
                </div>
            </div>
        </>
    );
}

PropTypesEx.propTypes = {
    productName: propTypes.string.isRequired,
    price: propTypes.number,
    colors: propTypes.array,
    availability: propTypes.bool,
    feedback: propTypes.object,
    addToCart:propTypes.func
};

PropTypesEx.defaultProps = {
    productName:"iPhone",
    price:"36000", //passing string instead of number gives warning in console
    /**
     * react-jsx-dev-runtime.development.js:87 
        
       Warning: Failed prop type: Invalid prop `price` of type `string` supplied to `PropTypesEx`, expected `number`.
    at PropTypesEx (http://localhost:3000/static/js/bundle.js:1256:28)
    at App */ 
    colors:["Black", "White"],
    availability: true,
    feedback: {
        rating:4,
        comments:"good"
    },
    addToCart: function (e) {

    }
};

export default PropTypesEx;