
import 'bootstrap/dist/css/bootstrap.min.css';
import './PagesStatic/NewSchedule.css';
import Table from "../Components/ClassTable";
// mostafa  import 

import { useParams } from "react-router-dom"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from 'react'








function NewSchedule(){

    // my functions
    const history = useHistory()



    const myid = useParams().id
    const [Request, setRequest] = useState({})
    const [MyAnimal, setMyAnimal] = useState({})
    const [dataCame, setDataCame] = useState(false)
    const [price, setPrice] = useState()
    const [date, setDate] = useState()
    const [Surgery_Operation, setSurgery_Operation] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findRequest/${myid}/`)
            .then((res) => {
                setRequest(res.data)
                setDataCame(true)
                console.log(dataCame)
                console.log(Request.user)
                console.log(Request.animalName)
            }

            )
            .catch((err) => console.log(err))
    }, [])



    useEffect(() => {
        axios.get(`http://localhost:8000/api/findSpecificAnimal/${Request.animalName}/`)
            .then((res) => {
                setMyAnimal(res.data)
                getAge()
            })
            .catch((err) => console.log(err))
    }, [dataCame])

    const [agedata, setagedata] = useState("")

    const getAge = () => {
        const mydate = new Date()
        const myYear = mydate.getFullYear()

        const animalB_Date = MyAnimal.b_date
        const myarr = animalB_Date.split("-")
        console.log("my arr", myarr)


        const AnimalAgeY = myYear - (myarr[0])
        const AnimalAgeM = mydate.getMonth() - (myarr[1])
        const AnimalAgeD = mydate.getDay() - (myarr[2])
        console.log(myarr)
        console.log(myYear)
        console.log("birth date", animalB_Date)
        setagedata(AnimalAgeY + " years " + AnimalAgeM + "months " + AnimalAgeD + " days ")

    }

    const CurrentVet = useSelector((state) => state.loggedUser);
    const [medication, setMedication] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:8000/api/getMedication/${Request.animalName}/`)
            .then((res) => setMedication(res.data))
            .catch((err) => console.log(err))
    }, [dataCame])





    const addnewSurgery = async (e) => {
        e.preventDefault()
        const dataField = new FormData()
        dataField.append("animalName", MyAnimal.animalName)
        dataField.append("vetName", CurrentVet.username)
        dataField.append("operationName", Surgery_Operation)
        dataField.append("price", price)
        dataField.append("date", date)
        dataField.append("owner", Request.user)
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/insertSurgry/',
            data: dataField
        }).then((res) =>
            history.push("/SurgeryRequest")
        )
            .catch((err) => console.log(err))



        updatestaus(e)

    }

    const updatestaus = async (e) => {
        e.preventDefault()
        let formdata1 = new FormData()
        formdata1.append("statusVet", "accepted")
        await axios({
            method: 'POST',
            url: `http://localhost:8000/api/updateRequestStatusVet/${myid}/`,
            data: formdata1
        })
            .then((data) =>
                console.log(data.data)
            )
            .catch((err) => console.log(err))
    }


    const VetCancelRequest = async (e) => {
        e.preventDefault()
        let formdata2 = new FormData()
        formdata2.append("statusVet", "declined")
        await axios({
            method: 'POST',
            url: `http://localhost:8000/api/updateRequestStatusVet/${myid}/`,
            data: formdata2
        })
            .then((data) => {
                history.push("/SurgeryRequest")
                console.log(data.data)
                console.log("done sir")
            }

            )
            .catch((err) => console.log(err))
    }





    return(
        <>
        <h2 className="main-title my-4">Scheduled Operations</h2>
        <div className=" mid container">
            <div className="container-fluid row">
                <div>
                    <h5 id="head2">Surgical Operation Message</h5>
                    <p id="head2">{Request.message}</p>
                </div>
                <div className="col-6">
                <div className=" cc card">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <label className="labels" htmlFor="span22">Animal Name: </label>
                <span className="span22">{Request.animalName}</span>
                
            </li>
            <li className="list-group-item">
                <label className="labels" htmlFor="">User Name:</label>
                <span className="span22">{Request.user}</span>
            </li>
            <li className="list-group-item">
                <label className="labels" htmlFor=""> Animal Weight:</label>
                <span className="span22">{MyAnimal.weight} kg</span>
            </li>
            <li className="list-group-item">
                <label className="labels" htmlFor=""> Animal Gender:</label>
                <span className="span22">{MyAnimal.gender}</span>
            </li>
            <li className="list-group-item">
                <label className="labels" htmlFor=""> Animal Type:</label>
                <span className="span22">{MyAnimal.species}</span>
            </li>
            
        </ul>
                </div>
                </div>
                <div className="col-6">
                <div className=" cc card">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <label className="sp text-danger" htmlFor="">Operation Date:</label>
                <input type="text"  onChange={(e) => setDate(e.target.value)} name='date' value={date} className="inputs" />
            </li>
            <li className="list-group-item">
            <label className="sp text-danger" htmlFor="">Operation Price:</label>
                <input type="number" className="inputs" onChange={(e) => setPrice(e.target.value)} name='price' value={price} required/>
            </li>
            <li className="list-group-item">
            <label className="sp text-danger" htmlFor="">Operation Name:</label>
            <input type="text" className="inputs" onChange={(e) => setSurgery_Operation(e.target.value)} name='Surgery_Operation' value={Surgery_Operation} required />

            </li>
        </ul>
                </div>
                </div>
            </div>
        </div>
        <Table medications={medication}/>
        <div className="buttons">
            <button onClick={(e) => addnewSurgery(e)} className="btn bb ">Accept Surgery</button>
            <button onClick={(e) => VetCancelRequest(e)} className="btn bb">Deny Surgery</button>
        </div>
        
        </>
    )
}
export default NewSchedule;