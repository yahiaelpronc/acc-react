import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



function ServicesResponsesDiv(props){
    const [showdata,setshowdata]=useState("block")



    
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
            <div style={{display:showdata}} className='p-3 row my-2 border border-dark border-3'>

               



                    <div className='col-3'>
                        <p className='fw-bold my-2 text-danger'>AnimalType :<span className='text-dark'>{props.AnimalType}</span></p>
                        <p className='fw-bold mt-5 text-danger'>animalOwner :<span className='text-dark'>{props.animalOwner}</span></p>

                    </div>

                    <div className='col-2'>
                        <p className='fw-bold my-2 text-danger'>service type:<span className='text-dark'>{props.serviceName}</span></p>
                        <p className='fw-bold mt-5 text-danger'>statusOwner :<span className='text-dark'>{props.statusOwner}</span></p>


                    </div>
                    <div className= 'd-flex align-items-center col-2'>
                        <p className='fw-bold my-2 mx-3 text-danger'>date :<span className='text-dark'>{props.date}</span></p>
                    
                        


                    </div>
                    <div className= 'd-flex align-items-center col-2'>
                    <p className='fw-bold my-2 text-danger '>price :<span className='text-dark'>{props.price}</span></p>

                    
                        


                    </div>

                    <div className=' d-flex align-items-center col-1'>
                    <p className='fw-bold my-2 text-danger'>time: <span className='text-dark'>{props.time} {props.timePeriod}</span></p>
                


                    </div>

                    <div className='d-flex my-3 justify-content-end'>

                        <button onClick={(e)=> declineStatus(e)} className='btn btn-danger mx-2'>decline</button>
                        <button className='btn btn-danger mx-2'>chat</button>
                    </div>
                





            </div>
            </>)
}
export default ServicesResponsesDiv