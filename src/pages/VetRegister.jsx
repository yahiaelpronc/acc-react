import React from "react";
import './PagesStatic/VetRegister.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux'
import { changeUser, changeVet, changeLogged, changeLoggedType } from '../store/actions/action'
import axios from 'axios'
import { useState, useEffect } from 'react'
function VetRegister() {
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
        Specialization: ""
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

    const [username, setusername] = useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [password, setpassword] = useState("")
    const [profile_pic, setimage] = useState(null)
    const [birthdate, setbirthdate] = useState(null)
    const [country, setcountry] = useState("")
    const [address, setaddress] = useState("")
    const [facelink, setfacelink] = useState(null)
    const [specialization, setspecialization] = useState(null)


    // useEffect(()=>{
    //     axios.post("http://127.0.0.1:8000/api/insert/")
    //     .then((res)=> res.data)

    // },[])


    const addnewvet = async () => {
        let formField = new FormData()
        formField.append('username', username)
        formField.append('firstname', firstname)
        formField.append('lastname', lastname)
        formField.append('b_date', birthdate)
        formField.append('email', email)
        formField.append('password', password)
        formField.append('country', country)
        formField.append('address', address)
        formField.append('face_link', facelink)
        formField.append('mobile', mobile)
        formField.append('profile_pic', profile_pic)
        formField.append('specialization', specialization)
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/insertVet/',
            data: formField

        }).then((response) => console.log(response.data))
            .catch((err) => console.log(err))


        history.push("/class")


    }

    return (
        <>
            <div className="containervet">

                <div className="title">Registration for Veterinarians</div>
                <form action="./hometest.html" method="get" id="myform" className="myform row">

                    <div className="user-details columnset">
                        <div className="iteems col-lg-3 col-md-6 col-sm-12">
                            <span className="item">Username</span>
                            <input type="text" className="itemvalue" name="userrname" placeholder="Username" aria-label="Username"
                                aria-describedby="basic-addon1" />
                        </div>
                        <div className="iteems col-lg-3 col-md-6 col-sm-12">
                            <span className="item">First Name</span>
                            <input type="text" className="itemvalue" placeholder="Enter Your fisrt Name" name="frisstname" id="name" />
                            <p id="nameerr"></p>
                        </div>
                        <div className="iteems col-lg-3 col-md-6 col-sm-12">
                            <span className="item">Last Name</span>
                            <input type="text" className="itemvalue" placeholder="Enter Your last Name" name="lasstname" id="user" />
                            <p id="usererr"></p>
                        </div>
                        <div className="iteems col-lg-3 col-md-6 col-sm-12 dropdown">
                            <span className="item">Specialization</span>
                            <select className="itemvalue" name="specialization" value={specialization} onChange={(e) => setspecialization(e.target.value)} class="form-select p-2" aria-label="Default select example">
                                <option selected>Specialization</option>
                                <option value="obstetrics and gynecology">obstetrics and gynecology</option>
                                <option value="poultry">poultry</option>
                                <option value="equine">equine</option>
                                <option value="ruminant">ruminant</option>
                                <option value="fishes and aquatics">fishes and aquatics</option>
                            </select>

                        </div>

                        <div className="iteems col-lg-3 col-md-6 col-sm-12">
                            <span className="item">Email</span>
                            <input type="text" className="itemvalue" placeholder="Enter Your Email" id="email" />
                            <p id="emailerr"></p>
                        </div>
                        <div className="iteems col-lg-3 col-md-6 col-sm-12">
                            <span className="item">Phone Number</span>
                            <input type="text" className="itemvalue" placeholder="Enter Your egyption PhoneNumber" id="phone" />
                            <p id="phoneerr"></p>
                        </div>
                        <div className="iteems col-lg-3 col-md-6 col-sm-12">
                            <span className="item">Password</span>
                            <input type="password" className="itemvalue" placeholder="Enter Your Password" id="pass1" />
                            <p id="pass1err"></p>
                        </div>

                        <div className="iteems col-lg-3 col-md-6 col-sm-12">
                            <span className="item">Confirm Password</span>
                            <input type="password" className="itemvalue" placeholder="Confirm Your Password" id="pass2" />
                            <p id="pass2err"></p>
                        </div>


                        <div className="pic">
                            <span className="item">upload a profile pic.</span>
                            <input type="file" className="itemvalue" placeholder="upload" id="file" accept="image/png, image/jpeg" />
                            <p id="fileerr"></p>
                        </div>





                    </div>




                    <div className="optional col-md-12">
                        <h5>* optional</h5>


                    </div>



                    <div className="extra col-md-12 col-sm-6">
                        <label for="bdate" className="extrafeild">Birth Date</label>
                        <input type="date" className="feildvalue" name="bdate" id="bdate" aria-describedby="emailHelp"
                            placeholder=" Birth Date" />

                    </div>


                    <div className="extra col-md-12 col-sm-6">
                        <label for="country" className="extrafeild">Country</label>
                        <input type="text" className="feildvaluee" name="country" id="Country" aria-describedby="emailHelp" placeholder="Country" />

                    </div>

                    <div className="extra col-md-12 col-sm-6">
                        <label for="country" className="extrafeild">Address.</label>
                        <input type="text" className="feildvaluee" name="address" id="Country" aria-describedby="emailHelp"
                            placeholder="add Address." />

                    </div>



                    <div className="extra col-md-12 col-sm-6">
                        <label for="faceLink" className="extrafeild">Facebook Link</label>
                        <input type="url" className="feildvalue" name="" id="faceLink" aria-describedby="emailHelp"
                            placeholder="http//www.Facebook.com/fn.page" />

                    </div>



                    <div className="buttoon col-12">
                        <input type="submit" value="Register" id="submitbtn" />
                    </div>


                    <p id="submiterror"></p>
                </form>
            </div >

        </>
    )

}

export default VetRegister;


