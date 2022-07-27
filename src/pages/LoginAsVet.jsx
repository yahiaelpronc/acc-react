import './PagesStatic/Login.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
import './PagesStatic/EmergencyCSS.css';
import { useSelector, useDispatch } from 'react-redux'
import { changeUser, changeVet, changeLogged, changeLoggedType } from '../store/actions/action'
import axios from 'axios'
import { useState, useEffect } from 'react'
function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameErr, setUsernameErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [submitErr, setSubmitErr] = useState("")
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            loginUser(e)
        }
    }
    const loginUser = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:8000/api/loginVet/${username}/${password}`)
            .then((res) => {
                if (res.data === "Incorrect Credintials") {
                    setSubmitErr(res.data)
                }
                else {
                    console.log(res.data)
                    dispatch(changeUser(res.data))
                    dispatch(changeLogged(true))
                    dispatch(changeLoggedType("vet"))
                    history.push("/")
                }
            }
            )
            .catch((err) => console.log(err))
    }
    function changeData(e) {
        if (e.target.name === "username") {
            setUsername(e.target.value)
            if (e.target.value.length < 3) {
                setUsernameErr("Username Has To Be 3-30 Characters Long")
                document.getElementById("submitButton").disabled = true
            } else {
                setUsernameErr("")
                document.getElementById("submitButton").disabled = false
            }
        }
        else {
            setPassword(e.target.value)
            if (e.target.value.length < 3) {
                setPasswordErr("Password Has To Be 3-30 Characters Long")
                document.getElementById("submitButton").disabled = true
            } else {
                setPasswordErr("")
                document.getElementById("submitButton").disabled = false
            }
        }
    }
    return <>
        <div className="box2 my-5">
            <div className="page">
                <div className="header2">
                    <Link id="login" className="active" to="#login">login</Link>
                    <Link id="signup" to=".registerVet/.registervet.html">Register as Vet</Link>
                    <Link id="signup" to=".register/.Register/.contact.html">Register as User</Link>
                </div>
                <div id="errorMsg"></div>
                <div className="content2 ">
                    <div className="login" >
                        <div className="frist">
                            <label for="logName">Username</label>
                            <input type="text" name="username" id="logName" placeholder="username" onChange={(e) => changeData(e)} onKeyDown={(e) => handleKeyDown(e)} />
                            <p className="text-danger" style={{ fontSize: "15px" }}>{usernameErr}</p>
                        </div>
                        <div className="frist">
                            <label for="logPassword">Password</label>
                            <input type="password" name="password" id="logPassword" placeholder="password" onChange={(e) => changeData(e)} onKeyDown={(e) => handleKeyDown(e)} />
                            <p className="text-danger" style={{ fontSize: "15px" }}>{passwordErr}</p>
                        </div>
                        <div id="check">
                            <input type="checkbox" id="remember" />
                            <label for="remember" className="mx-4">Remember me</label>
                        </div>
                        <br /><br />
                        <p className="text-danger" style={{ fontSize: "17px" }}>{submitErr}</p>
                        <input type="submit" value="Login" id="submitButton" onClick={(e) => loginUser(e)} />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login;