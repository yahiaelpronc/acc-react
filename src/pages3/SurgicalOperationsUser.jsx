


import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import SurgericalResponseDiv from '../components3/SurgicalResponseDiv'

function SurgicalOperationsUser(){


    return(<>

            <div className='bg-light p-3'>
                <div className='row p-2'>
                    
                    <img className='col-3 h-25 w-25 rounded' src={require(`./myimages/animalsurgery1.jpg`)}/>
                    <div className='col-6 '>
                       <center> <h2 className=' text-danger my-4 '>Surgerical Operations </h2></center>
                      
                        <h4 className='  my-5 '>See Your Latest schedule For Surgeries</h4>

                    </div>

                </div>


                <SurgericalResponseDiv/>
            








            </div>
        </>)

}
export default SurgicalOperationsUser