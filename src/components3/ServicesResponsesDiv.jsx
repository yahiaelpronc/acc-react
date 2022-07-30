import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import '../pages/PagesStatic/NewSchedule.css'




function ServicesResponsesDiv(props){
    const [showdata,setshowdata]=useState("flex")



    
    const declineStatus = async () => {
   
        let formdata2 = new FormData()
        formdata2.append("statusUser","declined")
        await axios({
            method: 'POST',
            url: `http://localhost:8000/api/updateSrviceStatusUser/${props.id}/`,
            data: formdata2
        })
            .then((data) => {
            // history.push("/")
            console.log(data.data)
            setshowdata("none")
        console.log("done sir")}

            )
            .catch((err) => console.log(err))
    }


    return (<>

                <div className="container-fluid row p-3 border border-secondary my-5 mx-2 rounded" style={{display:showdata}}>
                    <div className="col-6">
                        <div className=" cc card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <label className="labels" htmlFor="span22">Animal Type: </label>
                                    <span className="span22">{props.AnimalType}</span>

                                </li>
                                <li className="list-group-item">
                                    <label className="labels" htmlFor="">location owner :</label>
                                    <span className="span22">{props.locationOwner}</span>
                                </li>
                                <li className="list-group-item">
                                    <label className="labels" htmlFor="">service Name:</label>
                                    <span className="span22">{props.serviceName}</span>
                                </li>
                                <li className="list-group-item">
                                    <label className="labels" htmlFor=""> location Name:</label>
                                    <span className="span22">{props.locationName}</span>
                                </li>


                            </ul>
                        </div>
                    </div>


                    <div className="col-6">
                        <div className=" cc card">
                            <ul className="list-group list-group-flush">


                                <li className="list-group-item">
                                    <label className="labels" htmlFor="">Owner status  :</label>
                                    <span className="span22">{props.statusOwner}</span>
                                </li>
                                <li className="list-group-item">
                                    <label className="labels" htmlFor=""> Date:</label>
                                    <span className="span22">{props.date}</span>

                                </li>
                                <li className="list-group-item">
                                    <label className="labels" htmlFor=""> Time:</label>
                                    <span className="span22">{props.time} {props.timePeriod}</span>

                                </li>
                                <li className="list-group-item">
                                    <label className="labels" htmlFor=""> Price:</label>
                                    <span className="span22">{props.price}</span>

                                </li>

                            </ul>
                        </div>
                        <div className='my-4 p-2'>
                            {/* <button onClick={(e)=> acceptStatus(e)} className='btn btn-danger mx-2'>Accept</button> */}
                            <button onClick={(e)=> declineStatus(e)} className='btn btn-danger mx-2'>decline</button>
                            <button className='btn btn-danger mx-2'>chat</button>
                        </div>
                    </div>
                </div>

















            
            </>)
}
export default ServicesResponsesDiv