// state={} defines teh initial state, action is the logn action passed
const LoginReducer = (state={},action) => {
    switch(action.type) {
        case "LOGIN":
            console.log('state' +JSON.stringify(state));
            return {
                ...state,
                isAuthed: action.isAuthenticated // isAuthed is set to true if authenticated
            }
        default:
            return state
    }
}
export default LoginReducer;