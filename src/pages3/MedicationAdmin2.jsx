


import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



function MedicationAdmin2(){


    return(<>

            <div className='bg-light p-3'>
                <div className='row p-2 my-2'>
                    
                    <img className='col-3 h-25 w-25 rounded' src={require(`./myimages/prescription2.webp`)}/>
                    <div className='col-6 d-flex align-items-center justify-content-center '>
                        <h2 className=' text-danger my-4 '>Medication Adminstration</h2>
                      
                        

                    </div>

                </div>
              

                <div className='row my-2 p-3'>
                    <div className='col-4'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Choose Animal</option>
                            <option value="1">Bondok</option>
                            <option value="2">toto</option>
                            <option value="3">fluffy</option>
                        </select>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-5'>

                         <div class="col-auto my-3">
                            <input type="text" className="form-control" placeholder='Medication Name' aria-describedby="passwordHelpInline"/>
                        </div>
                        <div class="col-auto my-3">
                            <input type="number" className="form-control" placeholder='Dosage' aria-describedby="passwordHelpInline"/>
                        </div>

                    </div>

                    <div className='col-5'>
                        <div class="col-auto my-3">
                            <input type="text" className="form-control" placeholder='Medication Name' aria-describedby="passwordHelpInline"/>
                        </div>
                        <div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Adminstration Route</option>
                                <option value="1">Route 1</option>
                                <option value="2">Route 2</option>
                              
                            </select>
                        </div>

   

                    </div>



                </div>

                <div className='my-3 p-3'>
                    <table class="table table-success table-striped table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">Animal Name</th>
                                    <th scope="col">Vet Name</th>
                                    <th scope="col">Medication Name</th>
                                    <th scope="col">Medication Type</th>
                                    <th scope="col">Dosage</th>
                                    <th scope="col">Dosage Interval </th>
                                    <th scope="col">Adminstration Route</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                                <td>Bondok</td>
                                <td>Samy Adel</td>
                                <td>pharma X</td>
                                <td>pills</td>
                                <td>200m</td>
                                <td>8 h</td>
                                <td>type1 </td>
                            </tr>
                            <tr>
                            <td>Bondok</td>
                                <td>Samy Adel</td>
                                <td>pharma X</td>
                                <td>pills</td>
                                <td>200m</td>
                                <td>8 h</td>
                                <td>type1 </td>
                      
                            </tr>
                            <tr>
                            <td>Bondok</td>
                                <td>Samy Adel</td>
                                <td>pharma X</td>
                                <td>pills</td>
                                <td>200m</td>
                                <td>8 h</td>
                                <td>type1 </td>
                        
                            </tr>
                         </tbody>
                    </table>

                </div>


                
                    <div className='d-flex justify-content-end me-4 my-2 p-2'>

                        <button className='btn btn-danger'>Adminster Medication</button>

                    </div>
                    








            </div>
        </>)

}
export default MedicationAdmin2