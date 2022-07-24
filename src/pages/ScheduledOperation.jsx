import './PagesStatic/Operations.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Table from '../Components/ClassTable';

function ScheduledOperation(){



    return(
        <>
        <h2 className="main-title">Scheduled Operations</h2>
        <div className=" mainDiv container">
            <div className='container-fluid row'>
                <div className='col-4'>
                    <form action="">
                    <label htmlFor="">Animal Name</label><br />
                    <label htmlFor="">Species</label><br />
                    <label htmlFor="">Username</label><br />
                    <label htmlFor="">Age</label><br />
                    <label htmlFor="">Weight</label><br />
                    <label htmlFor="">Gender</label>
                    <div className='special'>
                    <i className="fa-solid fa-calendar-check" style={{color:'#1787e0'}}></i>
                        <label htmlFor="">Date</label>
                    </div>
                    <div className='special'>
                    <i className="fa-solid fa-money-bill" style={{color:'#1787e0'}}></i>
                        <label htmlFor="">Price</label>
                    </div>
                    <div className='special'>
                    <i className="fa-solid fa-angles-right" style={{color:'#1787e0'}}></i>
                        <label htmlFor="">Surgery Operation</label>
                    </div>
                    </form>
                </div>
                <div className='col-8'>
                    <div className='message'>
                        <h3>Message</h3>
                    </div>
                    <img src={require(`./images/dental.jpg`)} alt="" id='dent1'/>
                </div>
            </div>
        </div>
        <Table Med1="Med x"  Dos1="200m" interval1="20th June"/>
        
        </>
    )
}
export default ScheduledOperation;