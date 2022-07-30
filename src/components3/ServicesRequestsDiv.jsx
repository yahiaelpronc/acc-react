import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import '../pages/PagesStatic/NewSchedule.css'




function ServicesRequestsDiv(props) {
    const [showdata, setshowdata] = useState("flex")


    const acceptStatus = async (e) => {
        let formdata2 = new FormData()
        formdata2.append("statusOwner", "accepted")
        await axios({
            method: 'POST',
            url: `http://localhost:8000/api/updateSrviceStatusOwner/${props.id}/`,
            data: formdata2
        })
            .then((data) => {
                // history.push("/")
                e.target.style.display = "none"
                console.log(data.data)
                console.log("done sir")
            })
            .catch((err) => console.log(err))
    }

    const declineStatus = async () => {

        let formdata2 = new FormData()
        formdata2.append("statusOwner", "declined")
        await axios({
            method: 'POST',
            url: `http://localhost:8000/api/updateSrviceStatusOwner/${props.id}/`,
            data: formdata2
        })
            .then((data) => {
                // history.push("/")
                console.log(data.data)
                setshowdata("none")
                console.log("done sir")
            }

            )
            .catch((err) => console.log(err))
    }


    return (<>
        {props.statusOwner !== "declined" && (<>

            <div className="container-fluid row p-3 border border-secondary my-5 mx-2 rounded" style={{ display: showdata }}>

                {/* <div className="col-12 p-3 fs-4 text-danger">{sur.message}</div> */}

                <div className="col-6">
                    <div className=" cc card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <label className="labels" htmlFor="span22">Animal Type: </label>
                                <span className="span22">{props.AnimalType}</span>

                            </li>
                            <li className="list-group-item">
                                <label className="labels" htmlFor="">Animal Owner:</label>
                                <span className="span22">{props.animalOwner}</span>
                            </li>
                            <li className="list-group-item">
                                <label className="labels" htmlFor="">service Name:</label>
                                <span className="span22">{props.serviceName}</span>
                            </li>


                        </ul>
                    </div>
                </div>


                <div className="col-6">
                    <div className=" cc card">
                        <ul className="list-group list-group-flush">


                            <li className="list-group-item">
                                <label className="labels" htmlFor="">User status  :</label>
                                <span className="span22">{props.statusUser}</span>
                            </li>
                            <li className="list-group-item">
                                <label className="labels" htmlFor=""> Date:</label>
                                <span className="span22">{props.date}</span>

                            </li>

                        </ul>
                    </div>
                    <div className='my-4 p-2'>
                        {props.statusOwner !== "accepted" &&
                            <button onClick={(e) => acceptStatus(e)} className='btn btn-danger mx-2'>Accept</button>
                        }
                        <button onClick={(e) => declineStatus(e)} className='btn btn-danger mx-2'>decline</button>
                        {/* <button className='btn btn-danger mx-2'>chat</button> */}
                    </div>
                </div>
            </div>

        </>)}




    </>)
}
export default ServicesRequestsDiv