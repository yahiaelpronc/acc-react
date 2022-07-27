


import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import RequestDiv from '../components3/RequestDiv'
import { useSelector, useDispatch } from 'react-redux'



function SurgeryRequest(){
    const loggedUser = useSelector((state) => state.loggedUser);
    const [Requests,setRequests]=useState([])
    console.log(loggedUser)


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getRequests/${loggedUser.username}/`)
        .then((res)=> setRequests(res.data))
        .catch((err)=> console.log(err))

    },[])


    return(<>

            <div className='bg-light p-3'>
                <div className='row p-2'>
                    
                    <img className='col-3 h-25 w-25 rounded' src={require(`./myimages/schedule1.png`)}/>
                    <div className='col-6 '>
                       <center> <h2 className=' text-danger my-4 '>Surgery Requests</h2></center>
                      
                        <h4 className='  my-5 '>See Your Latest schedule For Surgeries</h4>

                    </div>

                </div>
                {Requests.map(req=>{
                    return(<>
                    {req.status != 'dismissed' && (
                                <RequestDiv details={`request/${req.id}`} status={req.status} message={req.message} OwnerName={req.user} AnimalName={req.animalName}/>

                    )}
                        </>)
                })}
                








            </div>
        </>)

}
export default SurgeryRequest