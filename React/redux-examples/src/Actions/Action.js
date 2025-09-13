import axios, { formToJSON } from 'axios';

// action returns the type 
const increment = () => {
    return {
        type:"INCREMENT"
    }
}

const decrement = () => {
    return {
        type:"DECREMENT"
    }
}

// depending on loginValidate, teh isAuthenticated field will be set
const login = (isAuthenticated) => {
    return {
        type: "LOGIN",
        isAuthenticated
    }
}

// method to check if the user creds are valid
const loginValidate = (data) => { //data is the data entered and passed from form
    return dispatch => { // return dispatch as action will be dispatched
        axios.get("http://localhost:4000/users")
        .then((res) => {
            let value = res.data;
            console.log('users - '+formToJSON(value));
            // find if the creds are valid
            var result = value.find(
                function(el) {
                    console.log('el.username' +el.username);
                    console.log('el.password' +el.password);
                    console.log('data.username' +data.username);
                    console.log('data.password' +data.password);
                    return el.username===data.username && el.password === data.password
                }
            )
            //dispatch teh login action. As action is in same file, no need to declare useDispatch()
            if(result) {
                dispatch(login(true));
            } else {
                dispatch (login(false));
            }
        })
    }
}

export {increment, decrement, loginValidate}