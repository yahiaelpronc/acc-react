import React from 'react';
import { Link } from 'react-router-dom'
import Myform from './Myform';
import { useSelector, useDispatch } from 'react-redux'
import { changeUser, changeVet, changeLogged, changeLoggedType } from '../store/actions/action'
import './ComponentStatic/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { useState, useEffect } from 'react'
function NavbarComponent() {

  const loggedUser = useSelector((state) => state.loggedUser);
  const currentVet1 = useSelector((state) => state.currentVet);
  const currentPage = useSelector((state) => state.currentPage);
  const userType = useSelector((state) => state.type);
  const [messages1, setMessages1] = useState([])
  const [Associated, setAssociated] = useState([])
  const withoutDuplicates = [...new Set(Associated)];
  const [vets, setVets] = useState([])
  const [vetFullData1, setvetFullData1] = useState([])
  const [DidGetMessages1, setDidGetMessages1] = useState(false)
  const [GotAssociated, setGotAssociated] = useState(false)
  const [IntervalVariable1, setIntervalVariable1] = useState()
  const [sentMessage1, setsentMessage1] = useState("")
  const [selectedVet, setSelectedVet] = useState("")
  const [isOnlineColor1, setisOnlineColor1] = useState("grey")
  const [scrollNeeded1, setscrollNeeded1] = useState(true)
  const [selectedCity, setSelectedCity] = useState(loggedUser.governorate)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getAllMessagesAssociated/${loggedUser.username}/`)
      .then((res) => {
        console.log("Messages : ", res.data)
        setMessages1(res.data)
      }
      )
      .catch((err) => console.log(err))
  }, [loggedUser]);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/findvet/${currentVet1}/`)
      .then((res) => {
        setvetFullData1(res.data)
        console.log(res.data)
      }
      )
      .catch((err) => console.log(err))
    if (vetFullData1.isOnline) {
      setisOnlineColor1("rgba(52, 183, 0, 0.6)")
    } else {
      setisOnlineColor1("rgba(187, 187, 187, 0.6)")
    }
  }, [messages1])
  useEffect(() => {
    if (messages1.length > 0) {
      messages1.map((message) => {
        if (message.sender !== loggedUser.username) {
          if (!Associated.includes(message.sender)) {
            setAssociated(current => [...current, message.sender]);
          }
        }
        else if (message.sender !== loggedUser.username) {
          if (Associated.includes(message.receiver)) {
            setAssociated(current => [...current, message.receiver]);
          }
        }
      })
      setGotAssociated(true)
      console.log("Associated", Associated)
      console.log("Associated withoutDuplicates", withoutDuplicates)
    }
  }, [messages1])
  function closeWindow() { }
  function handleKeyDown() { }
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  function getAllMessages(e) {
    console.log(e.target.id)
    // GET MESSAGES FROM BACKEND
    clearInterval(IntervalVariable1);
    setMessages1([])
    setIntervalVariable1(
      setInterval(function () {
        axios.get(`http://localhost:8000/api/getAllMessages/${loggedUser.username}/${e.target.id}`)
          .then((res) => {
            // console.log(res.data)
            setMessages1(res.data)
            setDidGetMessages1(true)
          }
          )
          .catch((err) => console.log(err))
      }
        , 300))
  }
  function myFunction(e) {
    document.getElementById("card_chat").style.display = "block";
    // SET CURRENT VET IN SESSION
    dispatch(changeVet(e.target.id))
    getAllMessages(e)
  }
  function closeWindow(e) {
    clearInterval(IntervalVariable1);
    document.getElementById("card_chat").style.display = "none";
    // CLEAR CURRENT VET IN SESSION
    dispatch(changeVet([]));
  }
  const sendMessage = async (e) => {
    setscrollNeeded1(true)
    let formField = new FormData()
    formField.append('content', sentMessage1)
    formField.append('sender', loggedUser.username)
    formField.append('receiver', currentVet1)
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/addMessage/',
      data: formField
    }).then((response) => console.log(response.data))
      .catch((err) => console.log(err))
    setsentMessage1("")
    await sleep(300)
    if (scrollNeeded1) {
      let scroll_to_bottom = document.getElementById('chat-content');
      scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
      setscrollNeeded1(false)
    }
  }


  function changeMessage(e) {
    setsentMessage1(e.target.value)
  }
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage(e)
    }
  }
  return (<>
    <div className="header" id="header">
      <div className="container">
        <Link to="/" className="logo my-1">
          <img src={require(`../pages/images/ACC Logo (1).png`)} alt="Navbar Logo" className="logo" />
          <p className="mt-3 mx-3">ACC</p>
        </Link>
        <ul className="main-nav" id='nav22'>
          {loggedUser.length < 1 ?
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/AdminPage2">Add location</Link></li>
              <li><Link to="/listlocations">List locations</Link></li>
            </>
            :
            <>
              {userType === "user" ?
                <>
                  <li><Link to="/emergency">Emergency</Link></li>
                  <li><Link to="/listlocations">List locations</Link></li>
                  <li><Link to="/ServicesRequest">Services Request</Link></li>
                  <li><Link to="/SurgicalOperationsUser">Surgical Operations User</Link></li>
                  <li><Link to="/UserServiceResponses">Services Responses User</Link></li>
                  {currentPage !== "emergency" &&
                    <>
                      <li>
                        <div className="col-2 dropdown">
                          <Link class="btn dropdown-toggle" to="#" role="button" id="linkDrop" data-bs-toggle="dropdown">
                            Messages
                          </Link>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            {GotAssociated &&
                              <>
                                {Object.keys(withoutDuplicates).map((key) => (
                                  <>
                                    {withoutDuplicates[key] !== loggedUser.username && <>
                                      <Link className="dropdown-item" onClick={(e) => myFunction(e)}
                                        id={withoutDuplicates[key]}>
                                        {withoutDuplicates[key]}</Link>
                                    </>}
                                  </>
                                ))}
                              </>
                            }
                          </ul>
                        </div>
                      </li>
                    </>
                  }

                  <li><Link to={`/logout`}>Logout</Link></li>
                </>
                :
                <>
                  <li><Link to={`/SurgeryRequest`}>SurgeryRequest</Link></li>
                  <li><Link to={`/TableOfSurgries`}>Table Of Surgries </Link></li>
                  <li><Link to={`/MedicationAdmin2`}>Add Medication</Link></li>
                  <li><Link to="/listlocations">List locations</Link></li>
                  <li><Link to="/ServicesRequest">Services Request</Link></li>
                  <li>
                    <div className="col-2 dropdown">
                      <Link class="btn dropdown-toggle" to="#" role="button" id="linkDrop" data-bs-toggle="dropdown">
                        Messages
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {GotAssociated &&
                          <>
                            {Object.keys(withoutDuplicates).map((key) => (
                              <>
                                {withoutDuplicates[key] !== loggedUser.username && <>
                                  <Link className="dropdown-item" onClick={(e) => myFunction(e)}
                                    id={withoutDuplicates[key]}>
                                    {withoutDuplicates[key]}</Link>
                                </>}
                              </>
                            ))}
                          </>
                        }
                      </ul>
                    </div>
                  </li>
                  <li><Link to={`/logoutVet`}>Logout</Link></li>
                </>
              }
            </>
          }
        </ul>
        {currentPage === "" &&
          <div style={{ zIndex: "3" }}>
            <div className="pad">
              <div className="row d-flex justify-content-center chats">
                <div className="col-md-12">
                  <div className="cards card-bordered" id="card_chat">
                    <div className="card-header">
                      <h4 className="card-title"><strong className="text-white"
                        id="receiver-name"><i class="fa-solid fa-circle" style={{ color: `${isOnlineColor1}` }}></i> {currentVet1}</strong></h4>
                      {userType === "user" ?
                        <Link className="btn btn-xs btn-secondary" to={`SendSurgeryUser/${currentVet1}`} data-abc="true">Request Surgery</Link>
                        :
                        <Link className="btn btn-xs btn-secondary" to={`SendSurgeryUser/${currentVet1}`} data-abc="true">Schedule Surgery</Link>
                      }
                      <button type="button" className="btn-close" aria-label="Close" onClick={(e) => closeWindow(e)}>
                      </button>
                    </div>
                    <div className="ps-container ps-theme-default ps-active-y chat-container" id="chat-content">
                      <div className="media media-chat media-chat-reverse ps-0">
                        <div className="media-body" id="MessageDivReverse">
                          {DidGetMessages1 &&
                            messages1.map(message => {
                              return (<>
                                <div key={message.id}>
                                  <p className="meta">{message.sender}</p>
                                  {message.sender === loggedUser.username ?
                                    <p>{message.content}</p> :
                                    <p style={{ backgroundColor: "rgb(127, 127, 127)" }}>{message.content}</p>
                                  }
                                  <p className="meta">{message.date}</p>
                                </div>
                              </>
                              );
                            })
                          }
                        </div>
                      </div>
                      <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                        <div className="ps-scrollbar-x" tabIndex="0" style={{ left: "0px", width: "0px" }}>
                        </div>
                      </div>
                      <div className="ps-scrollbar-y-rail"
                        style={{ top: "0px", height: "0px", right: "2px" }}>
                        <div className="ps-scrollbar-y" tabIndex="0" style={{ top: "0px", height: "2px" }}>
                        </div>
                      </div>
                    </div>
                    <div className="publisher bt-1 border-light">
                      <form action="">
                        <input className="publisher-input" type="text" placeholder="Write something"
                          id="Message" onChange={(e) => changeMessage(e)} value={sentMessage1} onKeyDown={(e) => handleKeyDown(e)} />
                        <Link className="publisher-btn text-info" data-abc="true">
                          <i className="fa fa-paper-plane" onClick={(e) => sendMessage(e)}></i>
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>


    </div>

  </>
  )
}
export default NavbarComponent