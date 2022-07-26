import React from 'react';
import { Link } from 'react-router-dom'
import Myform from './Myform';
import { useSelector } from 'react-redux';
import { changeUser, changeVet, changeLogged, changeLoggedType } from '../store/actions/action'
import './ComponentStatic/navbar.css';
function NavbarComponent() {
  const loggedUser = useSelector((state) => state.loggedUser);
  const currentVet = useSelector((state) => state.currentVet);
  const userType = useSelector((state) => state.type);
  return (<>
    <div className="header" id="header">
      <div className="container">
        <Link to="/" className="logo my-1">
          <img src={require(`../pages/images/ACC Logo (1).png`)} alt="Navbar Logo" className="logo" />
          <p className="mt-3 mx-3">ACC</p>
        </Link>
        <ul className="main-nav">
          {loggedUser.length < 1 ?
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/AdminPage2">Add location</Link></li>
            </>
            :
            <>
              {userType === "user" ?
                <>
                  <li><Link to="/emergency">Emergency</Link></li>
                  <li><Link to={`/logout`}>Logout</Link></li>
                  
                </>
                :
                <>
                  <li><Link to={`/logoutVet`}>Logout</Link></li>
                  <li><Link to={`/SurgeryRequest`}>SurgeryRequest</Link></li>
                  <li><Link to={`/operation`}>Scheduled Surgery</Link></li>
                </>
              }
            </>
          }

        </ul>
      </div>
    </div>
  </>
  )
}
export default NavbarComponent