import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from "react-router"
import { useSelector, useDispatch } from 'react-redux'



function SurgericalRequestDiv(props) {
    const loggedUser = useSelector((state) => state.loggedUser);

    const history = useHistory()


    const deleteResponse = async (id) => {
        await axios.delete(`http://localhost:8000/api/getSurgicalResponses/${i d}/`)
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
const [showdata, setshowdata] = useState("block")
const acceptSurgery = async (e) => {
    // let id = e.target.id
    let formdata2 = new FormData()
    formdata2.append("statusUser", "accepted")
    await axios({
        method: 'POST',
        url: `http://localhost:8000/api/updateOperationStatusUser/${props.id}/`,
        data: formdata2
    })
        .then((data) => {
            history.push("/SurgicalOperationsUser")
            console.log(data.data)
            // setshowdata("none")
            alert("accepted surgery")
            console.log("done sir")
        }
        )
        .catch((err) => console.log(err))
}


const RefuseSurgery = async (e) => {
    // let id = e.target.id
    let formdata2 = new FormData()
    formdata2.append("statusUser", "declined")
    await axios({
        method: 'POST',
        url: `http://localhost:8000/api/updateOperationStatusUser/${props.id}/`,
        data: formdata2
    })
        .then((data) => {
            history.push("/SurgicalOperationsUser")
            console.log(data.data)
            // setshowdata("none")
            setshowdata("none")
            alert("declined surgery")
            console.log("done sir")
        }
        )
        .catch((err) => console.log(err))
}
return (<>
    <div className='p-3 row my-2 border border-dark border-3' style={{ display: showdata }}>





        <div className='col-3'>
            <h3 className='fw-bold my-2'>{props.animalType}</h3>
            <h3 className='fw-bold my-2'>{props.userName}</h3>


        </div>


        <div className=' d-flex align-items-center col-6'>
            <div className='p-3 my-3 border border-danger'>
                <p className='fw-bold'>{props.message}  </p>

            </div>

        </div>

        {/* <div className='d-flex my-3 justify-content-end'>

            <button onClick={(e) => acceptSurgery(e)} className='btn btn-danger mx-5'>Accept</button>
            <button className='btn btn-danger' onClick={(e) => RefuseSurgery(e)} >Refuse</button>
        </div>
 */}





    </div>
</>)
}
export default SurgericalRequestDiv