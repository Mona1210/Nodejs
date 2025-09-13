// import logo from './logo.svg';
import './App.css';
import Rater from './components/Rater';
import Product from './components/Product';
import DefectTracker from './components/DefectTracker';
import Conditions from './components/Conditions';
import StateProps from './components/StateProps';
import EmployeeChild from './components/EmployeeChild';
import Employees from './components/Employees';
import PropTypesEx from './components/PropTypesEx';
import ChildrenEx from './components/ChildrenEx';
import Content from './components/Content';
import UseEffectEx from './components/UseEffectEx';
import AxiosGetEx from './components/AxiosGetEx';
import AxiosGetUsers from './components/AxiosGetUsers';
import LoginForm from './components/LoginForm';
import LoginRef from './components/LoginRef';
import EmployeesCRUD from './components/EmployeesCRUD';

function App(props) {
  return (
    // <DefectTracker/>
    // <Product/>
    // <Conditions/>
    // <StateProps/>
    // <EmployeeChild/>
    // <Employees/>
    // <PropTypesEx/>
    // <ChildrenEx/>
    // <Content/>
    // <UseEffectEx/>
    // <AxiosGetEx/>
    // <AxiosGetUsers/>
    // <LoginForm/>
    // <LoginRef/>\
    <EmployeesCRUD/>
    /**
     * Default props Demo
     * If no value is passed to the prop and its accessed within component, then default values considered
     * PropTypes used to validate props for a component. Different validators are used by PropTypes
     * To use this, prop-types should be installed (npm i prop-types)
     * In below eg, no props are sent to function App(props) from any parent component, so default values are taken
     */
    /* 
    <> 
      <h1>{props.element1}</h1>
      <h1>{props.element2}</h1>
    </> 
  */
    
  );
}

App.defaultProps = {
  element1: "Hello",
  element2: "World"
}

export default App;
