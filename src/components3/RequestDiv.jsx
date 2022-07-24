import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



function RequestDiv(){

    return (<>
            <div className='p-3 row my-2 border border-dark border-3'>
                <div className='col-4 '>
                    <div className='my-3'>
                        <h3 className='d-flex justify-content-start'>Animal Type    :<p className='ms-2 text-danger fw-bold'>Cat</p></h3>
                            
                    </div>
                    <div className='my-3'>
                    <h3 className='d-flex justify-content-start'>UserName  :<p className='ms-2 text-danger fw-bold'>MostafaMasrya</p></h3>

                    </div>


                </div>
                <div className='col-8'>

                    <div className='p-3 my-3 border border-danger'>
                        <p className='fw-bold'>my cat was sick and  we need an urgent surgery in time , i ask you to define the time and price needed for that surgery  </p>

                    </div>

                    <div className='d-flex  my-2'>

                        <button className='btn btn-danger mx-5'>Details</button>
                        <button className='btn btn-danger'>Cancel</button>
                    </div>



                </div>


            </div>
            </>)
}
export default RequestDiv