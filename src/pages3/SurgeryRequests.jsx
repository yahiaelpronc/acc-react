


import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import RequestDiv from '../components3/RequestDiv'


function SurgeryRequest(){


    return(<>

            <div className='bg-light p-3'>
                <div className='row p-2'>
                    
                    <img className='col-3 h-25 w-25 rounded' src={require(`./myimages/schedule1.png`)}/>
                    <div className='col-6 '>
                       <center> <h2 className=' text-danger my-4 '>Surgery Requests</h2></center>
                      
                        <h4 className='  my-5 '>See Your Latest schedule For Surgeries</h4>

                    </div>

                </div>
                <RequestDiv/>








            </div>
        </>)

}
export default SurgeryRequest