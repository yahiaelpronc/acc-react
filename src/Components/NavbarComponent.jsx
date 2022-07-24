import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './ComponentStatic/navbar.css';
function NavbarComponent() {
  const language = useSelector((state) => state.lang)
  console.log("Redux Session Variable :", language)
  return (<>
    <div className="header" id="header">
      <div className="container">
        <Link to="#" className="logo">ACC</Link>
        <ul className="main-nav">
          <li><Link to="#articles">Articles</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="/testAddLocation">Add Location</Link></li>
          <li><Link to="/testAddAnimal">Add Animal</Link></li>
          <li>
            <Link to="#">Other Links</Link>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}
export default NavbarComponent;