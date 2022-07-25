import React from "react";
import './PagesStatic/VetRegister.css';


function VetRegister() {

    return (
        <>
            <div className="containervet">

                <div className="title">Registration for Veterinarians</div>
                <form action="./hometest.html" method="get" id="myform">

                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" className="form-control" placeholder="@Username" aria-label="Username"
                                aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" placeholder="Enter Your fisrt Name" id="name" />
                            <p id="nameerr"></p>
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" placeholder="Enter Your last Name" id="user" />
                            <p id="usererr"></p>
                        </div>
                        <div className="input-box dropdown">
                            <span className="details">Specialization</span>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Select your Specialization.
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">obstetrics and gynecology</a></li>
                                <li><a className="dropdown-item" href="#">poultry</a></li>
                                <li><a className="dropdown-item" href="#">equine</a></li>
                                <li><a className="dropdown-item" href="#">ruminant</a></li>
                                <li><a className="dropdown-item" href="#">fishes and aquatics</a></li>
                            </ul>
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


                        <div className="my-2">
                            <span className="details">upload a profile pic.</span>
                            <input type="file" placeholder="upload" id="file" accept="image/png, image/jpeg" />
                            <p id="fileerr"></p>
                        </div>





                    </div>




                    <div className="mt-3 optional">
                        <h5>* optional</h5>


                    </div>



                    <div className="mb-3">
                        <label for="bdate" className="form-label label1">Birth Date</label>
                        <input type="date" className="form-control" id="bdate" aria-describedby="emailHelp"
                            placeholder=" Birth Date" />

                    </div>


                    <div className="mb-3">
                        <label for="country" className="form-label label1">Country</label>
                        <input type="text" className="form-control" id="Country" aria-describedby="emailHelp" placeholder="Country" />

                    </div>

                    <div className="mb-3">
                        <label for="country" className="form-label label1">Address.</label>
                        <input type="text" className="form-control" id="Country" aria-describedby="emailHelp"
                            placeholder="add Address." />

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
    )

}

export default VetRegister;


