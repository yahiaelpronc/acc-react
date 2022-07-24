import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import NotFound from './pages/NotFound'
import NavbarComponent from './Components/NavbarComponent'
import FooterComponent from './Components/FooterComponent';
import Home from './pages/HomePage';
import TestAddLocation from './pages2/TestAddLocation';
import TestAddAnimal from './pages2/TestAddAnimal';
import './pages/PagesStatic/Home.css';
function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavbarComponent/>
    
        <Switch>
          {/* Pages */} 
          
          <Route path={"/"} exact component={Home}/>
          <Route path={"/testAddLocation"} exact component={TestAddLocation}/>
          <Route path={"/testAddAnimal"} exact component={TestAddAnimal}/>
          {/* Test Pages */}
          <Route path={"*"} exact component={NotFound}/>
          </Switch>
          <FooterComponent/>
        </BrowserRouter>
      </div>
    );
}

export default App;
