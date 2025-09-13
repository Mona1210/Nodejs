
/**
 * React hooks - used to load data from DB by making API calls, save data to DB on form submission
 * LIfecycle methods - for making jax calls, update comp based on prop changes, clearing values when comp
 * is unmounted
 * 
 * Every comp has following phases
 * 1. Mounting - when comp is mounted to DOM tree
 * 2. Updating - when comp is being updated with new state, new props are being recieved
 * 3. Unmounting - destroying comp from DOM tree
 * 
 * Before hooks, React did not have a standard way of extracting and sharing non visual logic
 * 
 * useEffect hook - Used to make API calls; 1st arg - function, 2nd arg - optional array of dependencies
 * useEffect(()=> {
 *  //implementation
 * }, [array of dependencies])
 * 
 * variations of useEffect hook
 * 
 * 1. No dependency - (2nd arg not passed) useEffect executes once when comp is mounted and everytime 
 * its updated
 * useEffect(()=> {
 *  //implementation
 * })
 * 
 * 2. Empty Array - (2nd arg is empty) useEffect executes only once when comp is mounted
 * useEffect(()=> {
 *  //implementation
 * }, [])
 * 
 * 3. Props or State - (2nd arg prop/state) useEffect executes once when comp is mounted and everytime 
 * any dependency value changes
 * useEffect(()=> {
 *  //implementation
 * }, [props,state])
 * 
 * If API call needs too be made as soon as component mounts to fetch data then 2nd rg must be empty (#2)
 * 
 * API call to be made via useEffect
 * Once data is fetched, male it availav\ble for component by setting state of teh comp to trigger 
 * re-render using useSate hook
 * 
 * React doesnt provide any helper method for AJAX calls
 * Any third party JS library can be used. We will be using axios
 * 
 * Axios offers many methods - get, post, put, delete, patch, options
 * 
 * axios.get('url')
 *  .then(result =>
 *      console.log(result.data);
 *  )
 *  .catch(error =>
 *      console.log(error)
 *  )
 * 
 * axios.post('url', {data})
 *  .then(result =>
 *      console.log(result.data);
 *  )
 *  .catch(error =>
 *      console.log(error)
 *  )
 * 
 * Advantages of axios over fetch
 * 1. axios gives the response we need, with fetch need to use .json method
 * 2. more secure than fetch
 * 3. Better error handling
 * 
 * Forms
 *React forms are different than HTML forms
 *React uses unidirectional flow only ie from component to view and not vice versa
 * We can make form elements reactive by setting a callback to onChange prop
 * Form comp's listen to changes and are fired when
 * => value of <input> or <textarea> changes
 * => checked state of <input> changes
 * => selected state of <input> changes
 * We must mainatain state for every form field
 * On change of input field, value can be fetched using event.target.value and corresponding state is 
 * updated and value attribute is asssigned to corresp state
 * onChange={(event)=> setUsername(event.target.value)}
 * 
 * We can also update the state within event handler instead of inline wth onChange
 * const handleSubmit = (event) => {
 * setUsername(event.target.value)
 * }
 * onChange={handleSubmit}
 * 
 * 2 types of forms in react
 * Controlled
 * Uncontrolled
 * 
 * Controlled - Input values are set to corresp state variables when value changes (LoginForm.js)
 * Uncontrolled - The form elements data is handled by DOM and not state (LoginRef.js)
 *  - Input does  not have value attribute and event handler
 *  - DOM ref is used to get the value of teh form field
 *  - ref is used to access React elements, and to get value of input field from DOM
 * 
 * useRef hook accepts initial value and returns a ref object
 * 
 * let countref = useRef(0);
 * input type="text" ref={countref}
 * We can access value of input field by countRef.current.value
 * 
 * ROUTER
 * import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
 * BrowserRouter - primary comp containing entire routing config. All the routes should be wrapped inside container
 * element like <div>
 * <Routes> - When location changes, <Routes> looks for its children <Route> to find best match.
 * <Route> - It is prop of Router. It maps routes to app comp using path and element props and sets nav routes
 * <element> - contains comp name to be rendered when route is mapped
 * <link> - Create nav links using "to" prop
 * Eg - <Link to="/home">Home<Link/>
 * 
 * nested routes - Home and about paths are child paths, do not begin with "/" as they are rendered with hEader
 * comp
 * <BrowserRouter>
 *      <Routes>
 *          <Route path="/" element={<Header/>}>
 *              <Route path="home" element={<Home/>}/>
 *              <Route path="about" element={<About/>}/>
 *          </Route>
 *      <Routes/>
 * <BrowserRouter/>
 * 
 * const Header = () => {
 *      return(<nav>
 *                  <Link to="home">Home</Link> |
 *                  <Link to="about">About</Link>
 *                  <Outlet/>
 *             </nav>)
 * }
 * export default Header;
 * <Outlet/> - This comp is responsible for rendering child matching child route
 * 
 * Index route -
 * If you want to render Home comp when path is / as default route then this needs to be speciified with 
 * index element
 * <BrowserRouter>
 *      <Routes>
 *          <Route path="/" element={<Header/>}>
 *              <Route index element={<Home/>}/>
 *              <Route path="home" element={<Home/>}/>
 *              <Route path="about" element={<About/>}/>
 *          </Route>
 *      <Routes/>
 * <BrowserRouter/>
 * 
 * Params passed along with url - Route params
 * Eg <Route path="/landing/:name/*" element={<Landing/>}
 * Landing comp gets renedered only when name param is passed to path
 * In Landing comp, name param can be accessed using useParams hook
 * The useParams hook return key value pair from current url that were maytched to route path
 * Using params object, we can retrieve route parameters
 * 
 * function Landing() {
 *      let params = useParams();
 *      return <>
 *          <h4>Welcome &nbsp; {params.name} to UI courses </h4>
 *          <Link to="display/angular">Angular</Link>
 *          <Link to="display/react">React</Link>
 *          <Link to="display/express">Express</Link>
 * }
 * On clickimg react link => http://localhost:3000/landing/:name/display/react
 * 
 * Not found route - to render not found route when user types url not listed
 * <Route path="*" element={<NotFound/>}>
 * The * will match any routes but has east precedence. So it will be picked up only when 
 * no other route matches
 * 
 * useNavigate hook - used to navigate through code
 * let navigate = useNavigate();
 * const handleLogin = (e) => {
 *      e.preventDefault();
 *      if ((user !== "")&&(pwd !== "")) {
 *          navigate("/landing/"+name);
 *      }
 * }
 * Router Demo - LoginR, LandingR, DisplayR
 * 
 * REDUX
 * Action 
 * - Comp cannot modify state directly.
 * - Action is dispatched when an event is triggered within com
 * - Action is JS object that describes event
 * - Action obj must contain a type preoperty which describes type of action
 * - Action creators arre functions that return action obj
 * Reducers
 * - When action is triggered, state modification is done by reducers
 * - Reducers contain logic for modifying state
 * - State cannot be directly modified by reducers (immutable)
 * - They copy teh state, modify it ad return teh new state
 * - Though there can be multiple reducers, only one reducer can be passed to createStore method
 * - combineReducers() - to combine multiple reducers into single reducing function
 * Store
 * - Used to place the entire state of teh app
 * - Reducer is passed to the store
 * - Reducer updates teh store with updated state after modification
 * - getState() - to get current state from the store
 * - dispatch(action)- to dispatch action wen event occurs within comp. It dispatches an action and reducer
 * takes care of updating state
 * - subscribe(listener) - for registering listeners
 * 
 * Middleware
 * - Whatever functionality couldnt be included in reducer can be done in middleware
 * - provides functionality between action and reducer
 * - organize all changes to DB (AJAX calls) in one place
 * - It allows preprocessing, so we can check for syntax etc
 * - Most common use - for async actions. It allows to dispatch async actions along with regular actions
 * - Middleware libraries - Redux Thunk, Redux Saga
 * - Each middleware recieves Store's dispatch and getState functions as arguments and returns function
 * - applyMiddleware() - accepts one or more middlewares and returns function
 * - custom middleware is also possible
 * - const customMiddleware = store => next => action => {}
 * - next - invoked when middleware is done with task assigned to it. It fwds action to reducer or another mware
 * - 
 * Binding React with Redux
 * - To access and render state properties, React comps need to connect to redux store
 * - Once comps get the state from redux store they can eb accessed as props
 * - store.subscribe() -  to subscibe to store
 * - store.getState() - to fetch current state from store
 * - connect() - to connect to redux store
 * - to use connect we need to define 2 functions 
 *      mapStateToProps - used to pass part of data from store in form of props to connected comp
 *      mapDispatchToProps - used to dispatch actions. Accepts dispatch() as arg and returns callback
 *      callback returned will be avialable as props within comp
 * - These functions are passed as args to connect()
 *   var App = connect(mapStateToProps, mapDispatchToProps)
 * - Whenever state is updated by reducer, mapStateToProps in comp is executed
 * - Comp tehn fetches updated state from store which is accessible as props to comp
 * - Whenever prop changes, the comp is re rendered with updated values
 * - useSelector and useDuspatch - alternative to connect higher order function
 * - useSelector - equivalent to mapStateToProps
 * - useDispatch - equivalent to mapDispatchToProps
 * - we can uwrite simpler and cleaner code with these functions
 * - <Provider> comp provides acces to teh store to all comps in app.
 * - When rendering the root comp must be wrapped within <Provider>
 * ReactDOM.render(
 *  <Provider store={store}>
 *      <App/>
 *  </Provider>,
 *  document.getElementById('root')
 * - The BrowserRouter comp should also be wrapped within <Provider>
 * )
 */