import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import './PagesStatic/EmergencyCSS.css';
function Emergency() {




    function myFunction(vet) {
        document.getElementById("card_chat").style.display = "block";
        // document.getElementById("doc").setAttribute("class", "col-md-4");
        // document.getElementById("title").setAttribute("class", "d-block main-title");
        // ViewMessage(vet)
        return true
    }
    function closeWindow() {
        document.getElementById("card_chat").style.display = "none";
        // document.getElementById("doc").setAttribute("class", "col-md-8");
        // document.getElementById("title").setAttribute("class", "d-none");
        return true;
    }
    function sendMessage() {
        return true;
    }
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <h2 className="main-title">Location</h2>
                    <div className="wrapper">
                        <div className="card p-2" style={{ height: "fitContent", width: "fitContent" }}>
                            <img src="" alt="" />
                            <div className="content">
                                <h4></h4>
                                <p>Phone Number : </p>
                                <p>Address : </p>
                                <p>Website :
                                    <Link to="" target="blank">
                                    </Link>
                                </p>
                                <p>Open From : </p>
                                <p>To : </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 doctor" id="doc">
                    <h2 className="main-title">Doctors</h2>
                    <div className="demo-content bg-alt">
                        <div className=" text-center m-auto col-md-4 col-sm-7 col-xs-12">
                            <div className="testimonials bg-transparent" id="testimonials">
                                <div className="container container1">
                                    <div className="box">
                                        <img src="" alt="" />
                                        <h3>Vet Name : </h3>
                                        <span className="title">Specialization :</span>
                                        <p>Phone :</p>
                                        <div className="mt-2">
                                            <button type="button" className="btn btn-success" id="">
                                                <Link style={{ color: "white", textDecoration: "none" }} to="/login/">Login To
                                                    Chat</Link>
                                            </button>
                                            <button type="button" className="btn btn-primary" id=""
                                                onClick={(e) => myFunction(e)}>chat</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* CHAT */}
                <div className="col-md-4 ">
                    <div className="pad">
                        <div className="row d-flex justify-content-center chats">
                            <div className="col-md-12">
                                <div className="cards card-bordered" id="card_chat">
                                    <div className="card-header">
                                        <h4 className="card-title"><strong className="text-white"
                                            id="receiver-name">Chat</strong></h4>
                                        <Link className="btn btn-xs btn-secondary" to="#" data-abc="true">Prescription
                                            Medication</Link>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={(e) => closeWindow(e)}>
                                        </button>
                                    </div>
                                    <div className="ps-container ps-theme-default ps-active-y" id="chat-content"
                                        style={{ overflowY: "scroll", height: "400px" }}>
                                        <div className="media media-chat">
                                            <div className="media-body" id="MessageDiv">
                                            </div>
                                        </div>
                                        <div className="media media-chat media-chat-reverse ps-0">
                                            <div className="media-body" id="MessageDivReverse">
                                            </div>
                                        </div>
                                        <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                                            <div className="ps-scrollbar-x" tabindex="0" style={{ left: "0px", width: "0px" }}>
                                            </div>
                                        </div>
                                        <div className="ps-scrollbar-y-rail"
                                            style={{ top: "0px", height: "0px", right: "2px" }}>
                                            <div className="ps-scrollbar-y" tabindex="0" style={{ top: "0px", height: "2px" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="publisher bt-1 border-light">
                                        <form action="">
                                            <input className="publisher-input" type="text" placeholder="Write something"
                                                id="Message" />
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
            </div>
        </>
    )
}
export default Emergency;