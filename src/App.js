import Navbar from './Components/Navbar/Navbar';
import Dash from './Components/Dashboard/Dashboard';
import Project from './Components/projectdetails/projectdetails';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/signup';
import ProjectForm from './Components/ProjectForm/ProjectForm'
import Update from './Components/Dashboard/update';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div>
      <div>
       <Navbar/>
       <div className="mt-4">
       <Switch>
         <Route path="/" exact  component={Dash}></Route>
       <Route path="/project:id" exact component={Project}></Route>
         <Route path="/login" exact component={Login}></Route>
         <Route path="/signup" exact component={Signup}></Route>
         <Route path="/proform" exact component={ProjectForm}></Route>
         <Route path="/update:id" exact component={Update}></Route>
       </Switch>
       </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
