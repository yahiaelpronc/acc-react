import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



function ServicesRequestsDiv(props){
    const [showdata,setshowdata]=useState("block")


    const acceptStatus = async () => {
   
        let formdata2 = new FormData()
        formdata2.append("statusOwner", "accepted")
        await axios({
            method: 'POST',
            url: `http://localhost:8000/api/updateSrviceStatusOwner/${props.id}/`,
            data: formdata2
        })
            .then((data) => {
            // history.push("/")
            console.log(data.data)
        console.log("done sir")}

            )
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
        console.log("done sir")}

            )
            .catch((err) => console.log(err))
    }


    return (<>
            <div style={{display:showdata}} className='p-3 row my-2 border border-dark border-3'>

               



                    <div className='col-3'>
                        <h3 className='fw-bold my-2'>{props.AnimalType}</h3>
                        <h3 className='fw-bold mt-5'>{props.animalOwner}</h3>

                    </div>

                    <div className='col-2'>
                        <h3 className='fw-bold my-2'>{props.serviceName}</h3>
                        <h3 className='fw-bold mt-5'>statusUser: {props.statusUser}</h3>


                    </div>
                    <div className= 'd-flex align-items-center col-2'>
                        <h3 className='fw-bold my-2'>{props.date}</h3>
                        


                    </div>

                    <div className=' d-flex align-items-center col-1'>
                    <h3 className='fw-bold my-2 text-danger'> {props.time} {props.timePeriod}</h3>
                


                    </div>

                    <div className='d-flex my-3 justify-content-end'>

                        <button onClick={(e)=> acceptStatus(e)} className='btn btn-danger mx-2'>Accept</button>
                        <button onClick={(e)=> declineStatus(e)} className='btn btn-danger mx-2'>decline</button>
                        <button className='btn btn-danger mx-2'>chat</button>
                    </div>
                





            </div>
            </>)
}
export default ServicesRequestsDiv