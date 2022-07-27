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
    const [image, setImage] = useState("")
    const [submitErr, setSubmitErr] = useState("")
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
        specialization: "",
    })
    const [errdata, seterrdata] = useState({
        usernameErr: "",
        firstnameErr: "",
        lastnameErr: "",
        emailErr: "",
        passwordErr: "",
        cityErr: "",
        phoneErr: "",
        confirmpassErr: "",
        b_dateErr: "",
        addressErr: "",
        facebook_linkErr: "",
        specializationErr: "",
    })
    const [errdataB, seterrdataB] = useState({
        usernameErrB: false,
        firstnameErrB: false,
        lastnameErrB: false,
        emailErrB: false,
        passwordErrB: false,
        phoneErrB: false,
        confirmpassErrB: false,
        b_dateErrB: false,
        addressErrB: false,
        facebook_linkErrB: false,
        specializationErrB: false,
    })
    function errors(e) {
        if (errdataB.usernameErrB
            && errdataB.firstnameErrB
            && errdataB.lastnameErrB
            && errdataB.emailErrB
            && errdataB.passwordErrB
            && errdataB.phoneErrB
            && errdataB.confirmpassErrB
            && errdataB.b_dateErrB
        ) {
            return false
        }
        return true
    }
    function isInTheFuture(date) {
        let today = new Date();
        // 👇️ OPTIONAL!
        // This line sets the time of the current date to the
        // last millisecond, so the comparison returns `true` only if
        // date is at least tomorrow
        today.setHours(23, 59, 59, 998);
        console.log(date)
        return date > today;
    }

    function changeData(e) {
        if (e.target.name === "username") {
            if (e.target.value.length < 3 || e.target.value.length > 30) {
                seterrdata({
                    ...errdata,
                    usernameErr: "This Field Has To Be 3 to 30 Characters Long"
                })
                seterrdataB({
                    ...errdataB,
                    usernameErrB: false
                })
            } else {
                seterrdataB({
                    ...errdataB,
                    usernameErrB: true
                })
                seterrdata({
                    ...errdata,
                    usernameErr: ""
                })
                setUserData({
                    ...userData,
                    username: e.target.value
                })
                console.log(errdataB)
            }
        }
        else if (e.target.name === "specialization") {
            if (e.target.value.length < 1) {
                seterrdata({
                    ...errdata,
                    specializationErr: "This Field Is Required"
                })
                seterrdataB({
                    ...errdataB,
                    specializationErrB: false
                })
            } else {
                seterrdataB({
                    ...errdataB,
                    specializationErrB: true
                })
                seterrdata({
                    ...errdata,
                    specializationErr: ""
                })
                setUserData({
                    ...userData,
                    specialization: e.target.value
                })
                console.log(errdataB)
            }
        }
        else if (e.target.name === "password") {
            if (e.target.value.length < 3 || e.target.value.length > 30) {
                seterrdata({
                    ...errdata,
                    passwordErr: "This Field Has To Be 3 to 30 Characters Long"
                })
                seterrdataB({
                    ...errdataB,
                    passwordErrB: false
                })
            } else {
                seterrdata({
                    ...errdata,
                    passwordErr: ""
                })
                seterrdataB({
                    ...errdataB,
                    passwordErrB: true
                })
                setUserData({
                    ...userData,
                    password: e.target.value
                })
            }
        }
        else if (e.target.name === "firstname") {
            if (e.target.value.length < 3 || e.target.value.length > 30) {
                seterrdata({
                    ...errdata,
                    firstnameErr: "This Field Has To Be 3 to 30 Characters Long"
                })
                seterrdataB({
                    ...errdataB,
                    firstnameErrB: false
                })
            } else {
                seterrdata({
                    ...errdata,
                    firstnameErr: ""
                })
                seterrdataB({
                    ...errdataB,
                    firstnameErrB: true
                })
                setUserData({
                    ...userData,
                    firstname: e.target.value
                })
            }
        }
        else if (e.target.name === "lastname") {
            if (e.target.value.length < 3 || e.target.value.length > 30) {
                seterrdata({
                    ...errdata,
                    lastnameErr: "This Field Has To Be 3 to 30 Characters Long"
                })
                seterrdataB({
                    ...errdataB,
                    lastnameErrB: false
                })
            } else {
                seterrdata({
                    ...errdata,
                    lastnameErr: ""
                })
                seterrdataB({
                    ...errdataB,
                    lastnameErrB: true
                })
                setUserData({
                    ...userData,
                    lastname: e.target.value
                })
            }
        }
        else if (e.target.name === "email") {
            if (e.target.value.length < 3 || e.target.value.length > 30) {
                seterrdata({
                    ...errdata,
                    emailErr: "This Field Has To Be 3 to 30 Characters Long"
                })
                seterrdataB({
                    ...errdataB,
                    emailErrB: false
                })
            } else {
                seterrdata({
                    ...errdata,
                    emailErr: ""
                })
                seterrdataB({
                    ...errdataB,
                    emailErrB: true
                })
                setUserData({
                    ...userData,
                    email: e.target.value
                })
            }
        }
        else if (e.target.name === "phone") {
            if (e.target.value.length < 3 || e.target.value.length > 30) {
                seterrdata({
                    ...errdata,
                    phoneErr: "This Field Has To Be 3 to 30 Characters Long"
                })
                seterrdataB({
                    ...errdataB,
                    phoneErrB: false
                })
            } else {
                seterrdata({
                    ...errdata,
                    phoneErr: ""
                })
                seterrdataB({
                    ...errdataB,
                    phoneErrB: true
                })
                setUserData({
                    ...userData,
                    phone: e.target.value
                })
            }
        }
        else if (e.target.name === "confirmpass") {
            if (e.target.value.length < 3 || e.target.value.length > 30) {
                if (e.target.value !== userData.password) {
                    seterrdata({
                        ...errdata,
                        confirmpassErr: "This Field Has To Be 3 to 30 Characters Long"
                    })
                    seterrdataB({
                        ...errdataB,
                        confirmpassErrB: false
                    })
                }
            } else if (e.target.value !== userData.password) {
                seterrdata({
                    ...errdata,
                    confirmpassErr: "Passwords Don't Match"
                })
                seterrdataB({
                    ...errdataB,
                    confirmpassErrB: false
                })
            }
            else {
                seterrdata({
                    ...errdata,
                    confirmpassErr: ""
                })
                seterrdataB({
                    ...errdataB,
                    confirmpassErrB: true
                })
                setUserData({
                    ...userData,
                    confirmpass: e.target.value
                })
            }
        }
        else if (e.target.name === "city") {
            setUserData({
                ...userData,
                city: e.target.value
            })
        }
        else if (e.target.name === "b_date") {
            if (isInTheFuture(new Date(String(e.target.value)))) {
                seterrdata({
                    ...errdata,
                    b_dateErr: "Please Choose A Correct Birth Date"
                })
                seterrdataB({
                    ...errdataB,
                    b_dateErrB: false
                })
            } else {
                seterrdata({
                    ...errdata,
                    b_dateErr: ""
                })
                seterrdataB({
                    ...errdataB,
                    b_dateErrB: true
                })
                setUserData({
                    ...userData,
                    b_date: e.target.value
                })
            }
        }
        else if (e.target.name === "address") {
            if (e.target.value.length < 3 || e.target.value.length > 30) {
                seterrdata({
                    ...errdata,
                    addressErr: "This Field Has To Be 3 to 30 Characters Long"
                })
                seterrdataB({
                    ...errdataB,
                    addressErrB: false
                })
            } else {
                seterrdata({
                    ...errdata,
                    addressErr: ""
                })
                seterrdataB({
                    ...errdataB,
                    addressErrB: true
                })
                setUserData({
                    ...userData,
                    address: e.target.value
                })
            }
        }
        else {
            if (e.target.value.length < 3 || e.target.value.length > 30) {
                seterrdata({
                    ...errdata,
                    facebook_linkErr: "This Field Has To Be 3 to 30 Characters Long"
                })
                seterrdataB({
                    ...errdataB,
                    facebook_linkErrB: false
                })
            } else {
                seterrdata({
                    ...errdata,
                    facebook_linkErr: ""
                })
                seterrdataB({
                    ...errdataB,
                    facebook_linkErrB: true
                })
                setUserData({
                    ...userData,
                    facebook_link: e.target.value
                })
            }
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
        formField.append("specialization", userData.specialization)
        formField.append("profile_pic", image)
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/insertVet/',
            data: formField
        }).then((res) => {
            if (res.data === "Username Already Exists") {
                seterrdata({
                    ...errdata,
                    usernameErr: res.data
                })
                setSubmitErr(res.data)
            }
            else if (res.data === "Email Already Exists") {
                seterrdata({
                    ...errdata,
                    emailErr: res.data
                })
                setSubmitErr(res.data)
            }
            else if (res.data === "Specialization Field Is Required") {
                seterrdata({
                    ...errdata,
                    specializationErr: res.data
                })
                setSubmitErr(res.data)
            }
            else {
                console.log(res.data)
                history.push("/login")
            }
        })
            .catch((err) => console.log(err))
    }
    return <>
        <div className="containeruser">

            <div className="title">Registration for Vets</div>
            <form>

                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Username</span>
                        <input type="text" placeholder="Username" onChange={(e) => changeData(e)} name="username" />
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.usernameErr}</p>
                    </div>
                    <div className="input-box">
                        <span className="details">First Name</span>
                        <input type="text" name="firstname" placeholder="Enter Your fisrt Name" id="name" onChange={(e) => changeData(e)} />
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.firstnameErr}</p>
                    </div>
                    <div className="input-box">
                        <span className="details">last Name</span>
                        <input type="text" name="lastname" placeholder="Enter Your last Name" id="user" onChange={(e) => changeData(e)} />
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.lastnameErr}</p>
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="text" name="email" placeholder="Enter Your Email" id="email" onChange={(e) => changeData(e)} />
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.emailErr}</p>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="number" name="phone" placeholder="Enter Your egyption PhoneNumber" id="phone" onChange={(e) => changeData(e)} />
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.phoneErr}</p>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="password" name="password" placeholder="Enter Your Password" id="pass1" onChange={(e) => changeData(e)} />
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.passwordErr}</p>
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input type="password" name="confirmpass" placeholder="Confirm Your Password" id="pass2" onChange={(e) => changeData(e)} />
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.confirmpassErr}</p>
                    </div>
                    <div className="input-box">
                        <span className="details">City</span>
                        <select className="form-select" name="city" aria-label="Default select example" onChange={(e) => changeData(e)}>
                            {governorates.map(gov => {
                                return (<>
                                    {gov === "Cairo" &&
                                        <option selected value={gov}>{gov}</option>
                                    }
                                    <option value={gov}>{gov}</option>
                                </>)
                            })}
                        </select>
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.cityErr}</p>
                    </div>
                    <div className="input-box">
                        <span className="details">Specialization</span>
                        <select className="form-select" name="specialization" aria-label="Default select example" onChange={(e) => changeData(e)}>
                            <option value="" selected>-------------</option>
                            <option value="obstetrics and gynecology" >obstetrics and gynecology</option>
                            <option value="poultry">poultry</option>
                            <option value="equine">equine</option>
                            <option value="ruminant">ruminant</option>
                            <option value="fishes and aquatics">fishes and aquatics</option>
                        </select>
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.specializationErr}</p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bdate" className="form-label label1">Birth Date</label>
                        <input type="date" className="form-control" id="bdate" aria-describedby="emailHelp"
                            placeholder=" Birth Date" name="b_date" onChange={(e) => changeData(e)} />
                        <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.b_dateErr}</p>
                    </div>
                    <div className="my-2">
                        <span className="details">upload a profile pic.</span>
                        <input type="file" placeholder="upload" id="file" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                </div>




                <div className="mt-3">
                    <h5>* optional</h5>
                </div>





                <div className="mb-3">
                    <label htmlFor="Address" className="form-label label1">Address</label>
                    <input type="text" className="form-control" id="Address" aria-describedby="emailHelp"
                        placeholder="Address" name="address" onChange={(e) => changeData(e)} />
                    <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.addressErr}</p>
                </div>


                <div className="mb-3">
                    <label htmlFor="faceLink" className="form-label label1">Facebook Page</label>
                    <input type="text" className="form-control" id="faceLink" aria-describedby="emailHelp"
                        placeholder="http//www.Facebook.com/fn.page" name="facebook" onChange={(e) => changeData(e)} />
                    <p className="text-danger" style={{ fontSize: "13px" }}>{errdata.facebook_linkErr}</p>
                </div>

                <p className="text-danger">{submitErr}</p>
                <div className="button">
                    <input disabled={errors()} type="submit" value="Register" id="submitbtn" onClick={(e) => RegisterUser(e)} />
                </div>


            </form>
        </div>
    </>
}

export default UserRegister;