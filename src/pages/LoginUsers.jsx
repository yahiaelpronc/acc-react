import React from "react";
import Cards from "../Components/ClassCard";
import Button from "../Components/ClassButton";
import { Link } from "react-router-dom";
function LoginUsers(){



    return(
        <>
        <h2 className="main-title">Login Users</h2>
        <div className=" contain container ">
        <div className=" container row">
            <div className="  col-lg-6">
                <Link to="" className="hh">
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top" src={require(`./images/features-01.jpg`)} alt="Card image cap"/>
                        <div className="card-body">
                          
                          <Link to="#" className="btn btn-primary">LOGIN AS USER</Link>
                        </div>
                      </div>
                </Link>
            </div>
            <div className=" col-lg-6">
                <Link to="" className="hh">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={require(`./images/dd.jpg`)} alt="Card image cap"/>
                        <div className="card-body">
                          <Link to="#" className="btn btn-primary">LOGIN AS VET</Link>
                        </div>
                      </div>
                </Link>
            </div>
        </div>
    </div>
        </>
    )
}
export default LoginUsers;