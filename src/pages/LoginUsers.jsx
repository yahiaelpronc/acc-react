import React from "react";
import Cards from "../Components/ClassCard";
import Button from "../Components/ClassButton";
import { Link } from "react-router-dom";
function LoginUsers() {



    return (
        <>
            <h2 className="main-title mt-5">Login</h2>
            <div className=" contain container mb-5 ">
                <div className=" container row">
                    <div className="  col-lg-6">
                        <div className="card" style={{ width: '18rem' }}>
                            <Link to="/loginUser/" className="hh">
                                <img className="card-img-top" src={require(`./images/features-01.jpg`)} alt="Card image cap" />
                                <div className="card-body">
                                    <Link to="/loginUser/" className="btn btn-primary">LOGIN AS USER</Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className=" col-lg-6">
                        <div className="card" style={{ width: "18rem" }}>
                            <Link to="/loginVet/" className="hh">
                                <img className="card-img-top" src={require(`./images/dd.jpg`)} alt="Card image cap" />
                                <div className="card-body">
                                    <Link to="/loginVet/" className="btn btn-primary">LOGIN AS VET</Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginUsers;