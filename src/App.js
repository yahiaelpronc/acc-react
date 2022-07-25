import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import NotFound from './pages/NotFound'
import NavbarComponent from './Components/NavbarComponent'
import Myform from './Components/Myform';
import VetForm2 from './pages3/VetForm';
import ListLocations from './pages3/listlocations';
import LocationDetails from './pages3/details';
import ListUsers from './pages3/listusers';
import UserDetails from './pages3/userdetails';
import ListVets from './pages3/listvets';
import VetDetails from './pages3/vetdetails';

import FooterComponent from './Components/FooterComponent';
import Home from './pages/HomePage';
import Emergency from './pages/Emergency';
import './pages/PagesStatic/Home.css';
import SurgeryRequest from './pages3/SurgeryRequests';
import SurgicalOperationsUser from './pages3/SurgicalOperationsUser';
import SendSurgeryUser from './pages3/SendSurgeryUser';
import MedicationAdmin2 from './pages3/MedicationAdmin2';
import AdminPage2 from './pages3/AdminPage';


import Logout from './pages/Logout';
import Locations from './pages/ListLocations';
import DetailsLocations from './pages/Details';
import loginUsers from './pages/LoginUsers';
import LoginAsUser from './pages/LoginAsUser';
import AddAnimal from './pages3/AddAnimal';
import AddUserForm from './pages/AddUserForm';
import Register from './pages/Register';
import VetRegister from './pages/VetRegister';
import UserRegister from './pages/UserRegister';
import ScheduledOperation from './pages/ScheduledOperation';
import RequestSur from './pages/RequestSur';
function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavbarComponent/>
        <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/VetRegister"} exact component={VetRegister}/>
          <Route path={"/UserRegister"} exact component={UserRegister}/>
          <Route path={"/Register"} exact component={Register}/>
          <Route path={"/login"} exact component={loginUsers}/>
          <Route path={"/LoginAsUser"} exact component={LoginAsUser}/>
          <Route path={"/operation"} exact component={ScheduledOperation}/>
          <Route path={"/request"} exact component={RequestSur}/>
          <Route path={"/emergency"} exact component={Emergency}/>
          <Route path={"/myform"} exact component={Myform}/>
          <Route path={"/vetform2"} exact component={VetForm2}/>
          <Route path={"/listlocations"} exact component={ListLocations} />
          <Route path={"/details/:id"} exact component={LocationDetails} />
          <Route path={"/listusers"} exact component={ListUsers} />
          <Route path={"/userdetails/:username"} exact component={UserDetails} />
          <Route path={"/vetdetails/:username"} exact component={VetDetails} />
          <Route path={"/listvets"} exact component={ListVets} />
          <Route path={"/SurgeryRequest"} exact component={SurgeryRequest} />
          <Route path={"/SurgicalOperationsUser"} exact component={SurgicalOperationsUser} />
          <Route path={"/SendSurgeryUser"} exact component={SendSurgeryUser} />
          <Route path={"/MedicationAdmin2"} exact component={MedicationAdmin2} />
          <Route path={"/AddAnimal"} exact component={AddAnimal} />
          <Route path={"/logout"} exact component={Logout} />
          <Route path={"/AdminPage2"} exact component={AdminPage2} />
          <Route path={"*"} exact component={NotFound}/>
        </Switch>
        <FooterComponent/>
        </BrowserRouter>
      </div>
    );
}

export default App;