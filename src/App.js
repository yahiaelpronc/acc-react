import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import NotFound from './pages/NotFound'
// import ListUsers from './pages/ListUsers'
import NavbarComponent from './Components/NavbarComponent'
import Myform from './Components/Myform';
import VetForm2 from './pages3/VetForm';
import ListLocations from './pages3/listlocations';
import LocationDetails from './pages3/details';
import ListUsers from './pages3/listusers';
import UserDetails from './pages3/userdetails';
import ListVets from './pages3/listvets';
import VetDetails from './pages3/vetdetails';
//import NavbarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';
import Home from './pages/HomePage';
//import Home from './pages/HomePage';
//import TestAddLocation from './pages2/TestAddLocation';
//import TestAddAnimal from './pages2/TestAddAnimal';
//import Emergency from './pages/Emergency';
//import './pages/PagesStatic/Home.css';
import Locations from './pages/ListLocations';
import DetailsLocations from './pages/Details';
import LoginUsers from './pages/LoginUsers';
function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavbarComponent/>
    
        <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/list"} exact component={Locations}/>
        <Route path={"/details"} exact component={DetailsLocations}/>
        <Route path={"/login"} exact component={LoginUsers}/>
        
        
          {/*
          <Route path={"/myform"} exact component={Myform}/>
          <Route path={"/vetform2"} exact component={VetForm2}/>
          <Route path={"/listlocations"} exact component={ListLocations} />
          <Route path={"/details/:id"} exact component={LocationDetails} />
          <Route path={"/listusers"} exact component={ListUsers} />
          <Route path={"/userdetails/:username"} exact component={UserDetails} />
          <Route path={"/vetdetails/:username"} exact component={VetDetails} />
          <Route path={"/listvets"} exact component={ListVets} />
          
          */}
          



          {/*

          <Route path={"/function/:id"} exact component={AppFunctionComponent}/>
          <Route path={"/class"} exact component={AppClassComponent}/>
          <Route path={"/UserData"} exact component={UserData}/>
           */}
          {/* <Route path={"/ListUsers"} exact component={ListUsers}/> */}
          {/* Pages */} 
          
          {/*
          <Route path={"/"} exact component={Home}/>
          <Route path={"/emergency"} exact component={Emergency}/>
          <Route path={"/testAddLocation"} exact component={TestAddLocation}/>
          <Route path={"/testAddAnimal"} exact component={TestAddAnimal}/>
          {/* Test Pages 
          <Route path={"*"} exact component={NotFound}/>
          */}
          
          
          </Switch>
          <FooterComponent/>
        </BrowserRouter>
      </div>
    );
}

export default App;
