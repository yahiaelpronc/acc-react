import React from "react";
import './PagesStatic/UserRegister.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux'
import { changeUser, changeVet, changeLogged, changeLoggedType } from '../store/actions/action'
import axios from 'axios'
import { useState, useEffect } from 'react'
function UserRegister() {
    const history = useHistory()
    const [governorates, setGovernorates] = useState(
        ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum",
            "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley",
            "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"]
    )
    const [image, setImage] = useState(null)
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        confirmpass: "",
        city: "",
        b_date: "",
        address: "",
        facebook_link: "",
    })
    const [errdata, seterrdata] = useState({
        usernameErr: "",
        firstnameErr: "",
        lastnameErr: "",
        emailErr: "",
        phoneErr: "",
        passwordErr: "",
        confirmpassErr: "",
        cityErr: "",
        b_dateErr: "",
        addressErr: "",
        facebook_linkErr: "",
    })


    function changeData(e) {
        if (e.target.name === "username") {
            setUserData({
                ...userData,
                username: e.target.value
            })
        }
        else if (e.target.name === "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })
        }
        else if (e.target.name === "firstname") {
            setUserData({
                ...userData,
                firstname: e.target.value
            })
        }
        else if (e.target.name === "lastname") {
            setUserData({
                ...userData,
                lastname: e.target.value
            })
        }
        else if (e.target.name === "email") {
            setUserData({
                ...userData,
                email: e.target.value
            })
        }
        else if (e.target.name === "phone") {
            setUserData({
                ...userData,
                phone: e.target.value
            })
        }
        else if (e.target.name === "confirmpass") {
            setUserData({
                ...userData,
                confirmpass: e.target.value
            })
        }
        else if (e.target.name === "city") {
            setUserData({
                ...userData,
                city: e.target.value
            })
        }
        else if (e.target.name === "b_date") {
            setUserData({
                ...userData,
                b_date: String(e.target.value).replace("/", "-")
            })
        }
        else if (e.target.name === "address") {
            setUserData({
                ...userData,
                address: e.target.value
            })
        }
        else {
            setUserData({
                ...userData,
                facebook_link: e.target.value
            })
        }
    }
    const RegisterUser = async (e) => {
        e.preventDefault()
        let formField = new FormData()
        formField.append("username", userData.username)
        formField.append("firstname", userData.firstname)
        formField.append("lastname", userData.lastname)
        formField.append("email", userData.email)
        formField.append("password", userData.password)
        formField.append("governorate", userData.city)
        formField.append("address", userData.address)
        formField.append("mobile", userData.phone)
        formField.append("b_date", userData.b_date)
        formField.append("face_link", userData.facebook_link)
        formField.append("profile_pic", image)
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/insertUser/',
            data: formField
        }).then((res) => history.push("/login"))
            .catch((err) => console.log(err))
    }
    return <>
        <div className="containeruser">

            <div className="title">Registration for Users</div>
            <form className="myform">

                <div className="user-details">
                    <div className="iteeeemss">
                        <span className="iteeem">Username</span>
                        <input type="text" className="iteeemvalue" placeholder="Username" aria-label="Username"
                            aria-describedby="basic-addon1" onChange={(e) => changeData(e)} name="username" />
                    </div>
                    <div className="iteeeemss">
                        <span className="iteeem">First Name</span>
                        <input type="text" className="iteeemvalue" name="firstname" placeholder="Enter Your fisrt Name" id="name" onChange={(e) => changeData(e)} />
                        <p id="nameerr"></p>
                    </div>
                    <div className="iteeeemss">
                        <span className="iteeem">last Name</span>
                        <input type="text" className="iteeemvalue" name="lastname" placeholder="Enter Your last Name" id="user" onChange={(e) => changeData(e)} />
                        <p id="usererr"></p>
                    </div>
                    <div className="iteeeemss">
                        <span className="iteeem">Email</span>
                        <input type="text" className="iteeemvalue" name="email" placeholder="Enter Your Email" id="email" onChange={(e) => changeData(e)} />
                        <p id="emailerr"></p>
                    </div>
                    <div className="iteeeemss">
                        <span className="iteeem">Phone Number</span>
                        <input type="number" className="iteeemvalue" name="phone" placeholder="Enter Your egyption PhoneNumber" id="phone" onChange={(e) => changeData(e)} />
                        <p id="phoneerr"></p>
                    </div>
                    <div className="iteeeemss">
                        <span className="iteeem">Password</span>
                        <input type="password" className="iteeemvalue" name="password" placeholder="Enter Your Password" id="pass1" onChange={(e) => changeData(e)} />
                        <p id="pass1err"></p>
                    </div>

                    <div className="iteeeemss">
                        <span className="iteeem">Confirm Password</span>
                        <input type="password" className="iteeemvalue" name="confirmpassword" placeholder="Confirm Your Password" id="pass2" onChange={(e) => changeData(e)} />
                        <p id="pass2err"></p>
                    </div>
                    <div className="iteeeemss">
                        <span className="iteeem">City</span>
                        <select className="iteeemvalue" name="city" aria-label="Default select example" onChange={(e) => changeData(e)}>
                            {governorates.map(gov => {
                                return (<>
                                    <option value={gov}>{gov}</option>
                                </>)
                            })}
                        </select>
                    </div>


                    <div className="piiiic">
                        <span className="details">upload a profile pic.</span>
                        <input type="file" placeholder="upload" id="file" onChange={(e) => setImage(e.target.files[0])} />
                        <p id="fileerr"></p>
                    </div>
                </div>




                <div className="optionaaal">
                    <h5>* optional</h5>
                </div>

                <div className="extraaa">
                    <label htmlFor="bdate" className="extrafeiiild">Birth Date</label>
                    <input type="date" className="feiiildvalue" id="bdate" aria-describedby="emailHelp"
                        placeholder=" Birth Date" name="b_date" onChange={(e) => changeData(e)} />
                </div>





                <div className="extraaa">
                    <label htmlFor="Address" className="extrafeiiild">Address</label>
                    <input type="text" className="feiiildvalue" id="Address" aria-describedby="emailHelp"
                        placeholder="Address" name="address" onChange={(e) => changeData(e)} />
                </div>


                <div className="extraaa">
                    <label htmlFor="faceLink" className="extrafeiiild">Facebook Page</label>
                    <input type="text" className="feiiildvalue" id="faceLink" aria-describedby="emailHelp"
                        placeholder="http//www.Facebook.com/fn.page" name="facebook" onChange={(e) => changeData(e)} />
                </div>


                <div className="butt00n">
                    <input type="submit" value="Register" id="submitbtn" onClick={(e) => RegisterUser(e)} />
                </div>


                <p id="submiterror"></p>
            </form>
        </div>
    </>
}

export default UserRegister;