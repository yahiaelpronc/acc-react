import './PagesStatic/Operations.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Table from '../Components/ClassTable';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';


function ScheduledOperation(){
    const loggedUser = useSelector((state) => state.loggedUser);
    console.log(loggedUser.username)
    const [Surgeries,setSurgries]=useState([])
    const [Medication,setMedication]=useState([])


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getSurgery/${loggedUser.username}/`)
        .then((res)=> {setSurgries(res.data)
        console.log(res.data)
  })
        .catch((err)=> console.log(err))
    },[])


    
    // useEffect(()=>{
    //     axios.get(`http://localhost:8000/api/getMedication/${Request.animalName}/`)
    //     .then((res)=> setMyAnimal(res.data))
    //     .catch((err)=> console.log(err))
    // },[])





    return(
        <>
        <h2 className="main-title">Scheduled Operations</h2>
        {Surgeries.map(sur => {
            return(<><div className=" mainDiv container">
                                <div className='container-fluid row'>
                                    <div className='col-4'>
                                        <form action="">
                                        <label htmlFor="">{sur.animalName}</label><br />
                                        {/* <label htmlFor="">{myAnimal.species}</label><br /> */}
                                        <label htmlFor="">{sur.owner}</label><br />
                                        <label htmlFor="">Age</label><br />
                                        {/* <label htmlFor="">{myAnimal.weight}</label><br />
                                        <label htmlFor="">{myAnimal.gender}</label> */}
                                        <div className='special'>
                                        <i className="fa-solid fa-calendar-check" style={{color:'#1787e0'}}></i>
                                            <label htmlFor="">{sur.date}</label>
                                        </div>
                                        <div className='special'>
                                        <i className="fa-solid fa-money-bill" style={{color:'#1787e0'}}></i>
                                            <label htmlFor="">{sur.price}</label>
                                        </div>
                                        <div className='special'>
                                        <i className="fa-solid fa-angles-right" style={{color:'#1787e0'}}></i>
                                            <label htmlFor="">{sur.operationName}</label>
                                        </div>
                                        </form>
                                    </div>
                                    <div className='col-8'>
                                        {/* <div className='message'>
                                            <h3>message</h3>
                                        </div> */}
                                        <img src={require(`./images/dental.jpg`)} alt="" id='dent1'/>
                                    </div>
                                </div>
                            </div>
                            {/* <Table Med1="Med x"  Dos1="200m" interval1="20th June"/> */}



                    </>)
        })}

        
        </>
    )
}
export default ScheduledOperation;