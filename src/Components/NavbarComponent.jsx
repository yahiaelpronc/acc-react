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
      <a href="#" className="logo">ACC</a>
      <ul className="main-nav">
        <li><a href="#articles">Articles</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#features">Features</a></li>
        <li>
          <a href="#">Other Links</a>
        </li>
      </ul>
    </div>
  </div>
    </>
    )
}
export default NavbarComponent;