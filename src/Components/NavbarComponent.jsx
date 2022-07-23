import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
function NavbarComponent() {
    const language = useSelector((state) => state.lang)
    console.log("Redux Session Variable :", language)
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/function">App Function</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/UserData">User Data</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/class">Class App</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ListUsers">List Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Redux Session Variable : {language}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}
export default NavbarComponent;