import React from "react";
import './PagesStatic/UserRegister.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux'
import { changeUser, changeVet, changeLogged, changeLoggedType } from '../store/actions/action'
import axios from 'axios'
import { useState, useEffect } from 'react'
function UserRegister() {
    const [governorates, setGovernorates] = useState(
        ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum",
            "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley",
            "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"]
    )
    const [image, setImage] = useState(null)
    const [userData, setUserData] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmpass: "",
        city: "",
        b_date: "",
        address: "",
        facebook_link: "",
    })
    const [errdata, seterrdata] = useState({
        animalnameerr: "",
        errusername: "",
        errweight: "",

    })
    function changeData(e) {
        return true
    }
    return <>
        <div className="containeruser">

            <div className="title">Registration for Users</div>
            <form action="./hometest.html" method="get" id="myform">

                <div className="user-details">
                    <div class="input-box">
                        <span className="details">Username</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                            aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-box">
                        <span className="details">First Name</span>
                        <input type="text" placeholder="Enter Your fisrt Name" id="name" />
                        <p id="nameerr"></p>
                    </div>
                    <div className="input-box">
                        <span className="details">last Name</span>
                        <input type="text" placeholder="Enter Your last Name" id="user" />
                        <p id="usererr"></p>
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="text" placeholder="Enter Your Email" id="email" />
                        <p id="emailerr"></p>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="text" placeholder="Enter Your egyption PhoneNumber" id="phone" />
                        <p id="phoneerr"></p>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="password" placeholder="Enter Your Password" id="pass1" />
                        <p id="pass1err"></p>
                    </div>

                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input type="password" placeholder="Confirm Your Password" id="pass2" />
                        <p id="pass2err"></p>
                    </div>
                    <div className="input-box">
                        <span className="details">City</span>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => changeData(e)}>
                            {governorates.map(gov => {
                                return (<>
                                    <option value={gov}>{gov}</option>
                                </>)
                            })}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label for="bdate" className="form-label label1">Birth Date</label>
                        <input type="date" className="form-control" id="bdate" aria-describedby="emailHelp"
                            placeholder=" Birth Date" />
                    </div>
                    <div className="my-2">
                        <span className="details">upload a profile pic.</span>
                        <input type="file" placeholder="upload" id="file" onChange={(e) => setImage(e.target.files[0])} />
                        <p id="fileerr"></p>
                    </div>
                </div>




                <div className="mt-3">
                    <h5>* optional</h5>
                </div>





                <div className="mb-3">
                    <label for="country" className="form-label label1">Address</label>
                    <input type="text" className="form-control" id="Address" aria-describedby="emailHelp"
                        placeholder="Country" />
                </div>


                <div className="mb-3">
                    <label for="faceLink" className="form-label label1">Facebook Link</label>
                    <input type="url" className="form-control" id="faceLink" aria-describedby="emailHelp"
                        placeholder="http//www.Facebook.com/fn.page" />
                </div>


                <div className="button">
                    <input type="submit" value="Register" id="submitbtn" />
                </div>


                <p id="submiterror"></p>
            </form>
        </div>
    </>
}

export default UserRegister;