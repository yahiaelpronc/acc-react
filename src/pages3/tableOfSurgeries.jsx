// import './PagesStatic/Operations.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Table from '../Components/ClassTable';
import { useSelector, useDispatch } from 'react-redux'

import '../pages/PagesStatic/NewSchedule.css'

import axios from 'axios';
import { changeUser, changeVet, changeLogged, changeLoggedType } from '../store/actions/action'


function TableOfSurgries() {
    const dispatch = useDispatch()
    const loggedUser = useSelector((state) => state.loggedUser);
    const currentVet = useSelector((state) => state.currentVet);
    const [Surgeries, setSurgries] = useState([])
    const [Medication, setMedication] = useState([])
    const [Animals, setAnimals] = useState([])
    const [Weights, setWeights] = useState([])
    const [Species, setSpecies] = useState([])
    const [b_date, setbdate] = useState([])
    const [length, setlength] = useState([])
    const [Finished, setFinished] = useState(true)
    const [dataCame, setDataCame] = useState(false)

    var WeightArr = []
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/getSurgery/${loggedUser.username}/`)
            .then((res) => {
                setSurgries(res.data)
                console.log("Surgery Res Data : ", res.data)
                setlength(res.data.length)
                // for (let i = 0; i < res.data.length; i++) {
                //     addWeights(res.data[i].owner, res.data[i].animalName);
                // }
            })
            .catch((err) => console.log(err))
    }, [])

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/getMedication/${Request.animalName}/`)
    //         .then((res) => setMedication(res.data))
    //         .catch((err) => console.log(err))
    // }, [dataCame])

    if (Surgeries.length > 0 && Finished) {
        for (let i = 0; i < length; i++) {
            axios.get(`http://localhost:8000/api/findSpecificAnimal/${Surgeries[i].owner}/${Surgeries[i].animalName}_${Surgeries[i].owner}/`)
                .then((res) => {
                    setWeights(current => [...current, res.data.weight]);
                    setSpecies(current => [...current, res.data.species]);
                    setbdate(current => [...current, res.data.b_date]);
                })
                .catch((err) => console.log(err))
        }
        setFinished(false)
    }
    console.log("Weights Res Data : ", Weights)

    const [agedata, setagedata] = useState("")
    const getAge = (b_date) => {
        const mydate = new Date()
        const myYear = mydate.getFullYear()

        const animalB_Date = b_date
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
    const [showdata, setshowdata] = useState("block")

    const dismissSurgery = async (e) => {
        let id = e.target.id
        let formdata2 = new FormData()
        formdata2.append("statusVet", "declined")
        await axios({
            method: 'POST',
            url: `http://localhost:8000/api/updateOperationStatusVet/${id}/`,
            data: formdata2
        })
            .then((data) => {
                // history.push("/")
                console.log(data.data)
                setshowdata("block")
                console.log("done sir")
            }
            )
            .catch((err) => console.log(err))
    }
    // style={{display:showdata}}


    return (
        <>
            <h2 className="main-title">Scheduled Operations</h2>
            <div className=" mid container">
                <div className="container-fluid row">
                    <div>
                        <h5 id="head2">Surgical Operation Message</h5>
                    </div>
                </div>
            </div>



            {Surgeries.map((sur, index) => {



                return (<>
                    {sur.statusVet !== "declined" && (
                        <div className="container-fluid row p-3 border border-secondary my-5 mx-2 rounded">

                            <div className="col-6">
                                <div className=" cc card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <label className="labels" htmlFor="span22">Animal Name: </label>
                                            <span className="span22">{sur.animalName}</span>

                                        </li>
                                        <li className="list-group-item">
                                            <label className="labels" htmlFor="">owner Name:</label>
                                            <span className="span22">{sur.owner}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <label className="labels" htmlFor=""> Animal Weight:</label>
                                            <span className="span22">{Weights[index]} kg</span>
                                        </li>
                                        <li className="list-group-item">
                                            <label className="labels" htmlFor=""> Animal Gender:</label>
                                            <span className="span22">{Species[index]}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <label className="labels" htmlFor=""> Animal Age:</label>
                                            <span className="span22">{agedata}</span>

                                        </li>

                                    </ul>
                                </div>
                            </div>


                            <div className="col-6">
                                <div className=" cc card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <label className="labels" htmlFor="span22">Operation date: </label>
                                            <span className="span22">{sur.date}</span>

                                        </li>
                                        <li className="list-group-item">
                                            <label className="labels" htmlFor="">Operation Name:</label>
                                            <span className="span22">{sur.operationName}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <label className="labels" htmlFor=""> Operation Price:</label>
                                            <span className="span22">{sur.price} $</span>
                                        </li>
                                        <li className="list-group-item">
                                            <label className="labels" htmlFor=""> statusUser:</label>
                                            <span className="span22">{sur.statusUser} $</span>
                                        </li>


                                    </ul>
                                </div>
                                <button id={sur.id} onClick={(e) => dismissSurgery(e)} className="btn btn-danger mt-5 ms-5 p-2">Dismiss</button>
                                <button className="btn btn-danger mt-5 ms-4 px-3 py-2">Chat</button>

                            </div>
                        </div>
                    )}
                </>)
            })}


        </>
    )
}
export default TableOfSurgries;


