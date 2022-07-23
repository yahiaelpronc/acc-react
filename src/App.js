import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import UserData from './pages/UserData'
import AppFunctionComponent from './pages/AppFunctionComponent'
import AppClassComponent from './pages/AppClassComponent'
import AddUserForm from './pages/AddUserForm'
import NotFound from './pages/NotFound'
import ListUsers from './pages/ListUsers'
import NavbarComponent from './Components/NavbarComponent'
import FooterComponent from './Components/FooterComponent';
function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavbarComponent/>
        <FooterComponent/>
        <Switch>
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
