import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {useHistory} from "react-router"
import { useSelector, useDispatch } from 'react-redux'



function SurgericalResponseDiv(props){
    const loggedUser = useSelector((state) => state.loggedUser);

    const history=useHistory()


    const deleteResponse= async (id)=>{
        await axios.delete(`http://localhost:8000/api/getSurgicalResponses/${id}/`)
        history.push("/SurgicalOperationsUser")
    }



    // const addnewSurgery = async () => {
    //     const dataField = new FormData()
    //     dataField.append("animalName", props.animalName)
    //     dataField.append("vetName", props.vetName)
    //     dataField.append("operationName", props.operationName)
    //     dataField.append("price", props.price)
    //     dataField.append("date", props.date)
    //     dataField.append("owner", loggedUser.username)
    //     await axios({
    //         method: 'post',
    //         url: 'http://127.0.0.1:8000/api/insertSurgry/',
    //         data: dataField
    //     }).then((res) =>
    //         history.push("/SurgicalOperationsUser")
    //     )
    //         .catch((err) => console.log(err))

    // }

    // onClick={(e)=> addnewSurgery(e)}

    return (<>
            <div className='p-3 row my-2 border border-dark border-3'>

               



                    <div className='col-3'>
                        <h3 className='fw-bold my-2'>{props.animalName}</h3>
                        <h3 className='fw-bold my-2'>{props.vetName}</h3>
                    

                    </div>

                    <div className='col-3'>
                    <h3 className='fw-bold my-2'>{props.date}</h3>
                        <h3 className='fw-bold mt-5'>{props.price}</h3>


                    </div>

                    <div className=' d-flex align-items-center col-3'>
                    <h3 className='fw-bold my-2 text-danger'>{props.operationName} </h3>
                


                    </div>

                    <div className='d-flex my-3 justify-content-end'>

                        <button  className='btn btn-danger mx-5'>Accept</button>
                        <button className='btn btn-danger' onClick={()=> deleteResponse(props.id)} >Refuse</button>
                    </div>
                





            </div>
            </>)
}
export default SurgericalResponseDiv