


import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import SurgericalResponseDiv from '../components3/SurgicalResponseDiv'
import { useSelector, useDispatch } from 'react-redux'


function SurgicalOperationsUser(){
    const loggedUser = useSelector((state) => state.loggedUser);
    const [Responses,setResponses]=useState([])


    



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getSurgicalResponses/${loggedUser.username}/`)
        .then((res)=> setResponses(res.data))
        .catch((Err)=> console.log(Err))

    },[])


    return(<>

            <div className='bg-light p-3'>
                <div className='row p-2'>
                    
                    <img className='col-3 h-25 w-25 rounded' src={require(`./myimages/animalsurgery1.jpg`)}/>
                    <div className='col-6 '>
                       <center> <h2 className=' text-danger my-4 '>Surgerical Operations </h2></center>
                      
                        <h4 className='  my-5 '>See Your Latest schedule For Surgeries</h4>

                    </div>

                </div>
                
                {Responses.map(response=>{
                    return(<>
                                 <SurgericalResponseDiv operationName={response.operationName} vetName={response.vetName} animalName={response.animalName} price={response.price}
                                    date={response.date} id={response.id}  />

                            </>)
                })}


           
            








            </div>
        </>)

}
export default SurgicalOperationsUser