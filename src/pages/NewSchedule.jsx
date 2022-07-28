import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './PagesStatic/NewSchedule.css';
import Table from "../Components/ClassTable";


function NewSchedule(){


    return(
        <>
        <h2 className="main-title my-4">Scheduled Operations</h2>
        <div className=" mid container">
            <div className="container-fluid row">
                <div>
                    <h5 id="head2">Surgical Operation Message</h5>
                </div>
                <div className="col-6">
                <div className=" cc card">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <label className="labels" htmlFor="span22">Animal Name:</label>
                <span className="span22">Roxy</span>
                
            </li>
            <li className="list-group-item">
                <label className="labels" htmlFor="">User Name:</label>
                <span className="span22">Ali Ahmed</span>
            </li>
            <li className="list-group-item">
                <label className="labels" htmlFor=""> Animal Weight:</label>
                <span className="span22">800kg</span>
            </li>
            <li className="list-group-item">
                <label className="labels" htmlFor=""> Animal Gender:</label>
                <span className="span22">Female</span>
            </li>
            <li className="list-group-item">
                <label className="labels" htmlFor=""> Animal Age:</label>
                <span className="span22">5 years</span>
            </li>
            
        </ul>
                </div>
                </div>
                <div className="col-6">
                <div className=" cc card">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <label className="sp text-danger" htmlFor="">Operation Date:</label>
                <input type="text" className="inputs" />
            </li>
            <li className="list-group-item">
            <label className="sp text-danger" htmlFor="">Operation Price:</label>
                <input type="text" className="inputs" />
            </li>
            <li className="list-group-item">
            <label className="sp text-danger" htmlFor="">Operation Name:</label>
            <input type="text" className="inputs" />

            </li>
        </ul>
                </div>
                </div>
            </div>
        </div>
        <Table/>
        <div className="buttons">
            <button className="btn bb ">Accept Surgery</button>
            <button className="btn bb">Deny Surgery</button>
        </div>
        
        </>
    )
}
export default NewSchedule;