import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



function ServicesRequestsDiv(props){

    return (<>
            <div className='p-3 row my-2 border border-dark border-3'>

               



                    <div className='col-3'>
                        <h3 className='fw-bold my-2'>{props.AnimalType}</h3>
                        <h3 className='fw-bold mt-5'>{props.animalOwner}</h3>

                    </div>

                    <div className='col-2'>
                        <h3 className='fw-bold my-2'>{props.serviceName}</h3>
                        <h3 className='fw-bold mt-5'>{props.price}</h3>


                    </div>
                    <div className= 'd-flex align-items-center col-2'>
                        <h3 className='fw-bold my-2'>{props.date}</h3>
                        


                    </div>

                    <div className=' d-flex align-items-center col-1'>
                    <h3 className='fw-bold my-2 text-danger'> {props.time} {props.timePeriod}</h3>
                


                    </div>

                    <div className='d-flex my-3 justify-content-end'>

                        <button className='btn btn-danger mx-2'>Accept</button>
                        <button className='btn btn-danger mx-2'>decline</button>
                        <button className='btn btn-danger mx-2'>chat</button>
                    </div>
                





            </div>
            </>)
}
export default ServicesRequestsDiv