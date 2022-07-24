import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



function SurgericalResponseDiv(){

    return (<>
            <div className='p-3 row my-2 border border-dark border-3'>

               



                    <div className='col-3'>
                        <h3 className='fw-bold my-2'>CAT</h3>
                        <h3 className='fw-bold mt-5'>Bondok</h3>

                    </div>

                    <div className='col-3'>
                    <h3 className='fw-bold my-2'>22/2/2022</h3>
                        <h3 className='fw-bold mt-5'>2000$</h3>


                    </div>

                    <div className=' d-flex align-items-center col-3'>
                    <h3 className='fw-bold my-2 text-danger'>Surgerical open heart </h3>
                


                    </div>

                    <div className='d-flex my-3 justify-content-end'>

                        <button className='btn btn-danger mx-5'>Accept</button>
                        <button className='btn btn-danger'>Refuse</button>
                    </div>
                





            </div>
            </>)
}
export default SurgericalResponseDiv