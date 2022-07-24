import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



function SendSurgeryUser(){

    return (<>
            <div className='p-5  my-2 bg-light '>
                <div className='d-flex justify-content-center'>
                    <i class="fa-solid  fa-calendar-days fs-5 p-2"></i>
                    <h2 className='ms-5 text-danger'>Surgery Schedule</h2>

                </div>

                <div className='row my-4'>
                    <h4 className='col-2 text-danger'>Mostafa Masarya</h4>
                    <div className='col-4'>
                    <select class="form-select" aria-label="Default select example">
                            <option selected>Choose Animal</option>
                            <option value="1">Bondok</option>
                            <option value="2">toto</option>
                            <option value="3">fluffy</option>
                    </select>
                    </div>

                </div>

                <div className='row my-3'>
                    <div class="form-floating">
                         <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                         <label for="floatingTextarea">Message</label>
                    </div>

                </div>
                
                <div className='d-flex justify-content-end mt-5'>
                    <button className=' btn btn-danger'>Submit</button>
                </div>

              


            </div>
            </>)
}
export default SendSurgeryUser