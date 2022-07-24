import React from "react";
import Cards from "../Components/ClassCard";
function DetailsLocations(){


    return(
        <>
        <h2 className="main-title">Detailed Locations</h2>
        <div className="container-fluid">
            <div className="container-fluid row">
                <div className="col-4">
                    <img className="image1"  src={require(`./images/dental.jpg`)} alt="" />
                </div>
                <div className="col-8">
                <form action="" className="form1">
                    <h3>ACC Animal Care Center</h3>
                    <div className="box">
                        <div className="line">
                          <i className="fas fa-map-marker-alt fa-fw"></i>
                          <div className="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
                        </div>
                        <div className="line">
                          <i className="far fa-clock fa-fw"></i>
                          <div className="info">Business Hours: From 10:00 To 18:00</div>
                        </div>
                        <div className="line">
                          <i className="fas fa-phone-volume fa-fw"></i>
                          <div className="info">
                            <span>+20123456789</span><br/>
                            <span>+20198765432</span>
                          </div>
                        </div>
                        <div className="line">
                            <i className="fa-solid fa-envelope"></i>
                            <div className="info">accAnimal222@gmail.com</div>
                          </div>
                          <div className="line">
                            <i className="fa-solid fa-link"></i>
                            <div className="info">Website Link</div>
                          </div>
                          <div className="line">
                            <i className="fa-solid fa-briefcase"></i>
                            <div className="info">Our Service</div>
                          </div>
                      </div>
                   
                </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default DetailsLocations;