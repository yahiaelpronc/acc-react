import Cards from "../Components/ClassCard";
import img from './images/1.jpg';
import './PagesStatic/LocationPage.css';
import React, { useEffect, useState } from "react"
import axios from "axios"
import { changeCurrentLocation } from '../store/actions/action'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";


function Locations() {
    const dispatch = useDispatch()
    const currentLocation = useSelector((state) => state.currentLocation);
    const [locations, setlocation] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/listlocation/")
            .then((res) => setlocation(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <h2 className="main-title">Animal Care Locations</h2>
            <div className="container-fluid">
                <div className="container-fluid row">
                    {locations.map(location => {
                        return (<>
                            <div className="col-4">
                                <Link to={`detailslocations/${location.id}`}>
                                    <Cards
                                        title={location.name} ground="#1787e0"
                                        photo={require(`../media/profileImages${location.picture}`)}
                                        para={location.service} para1={location.address} />
                                </Link>
                            </div>
                            {/* <div className="col-4" id={location.name} onMouseEnter={(e) => changeLocation(e)}>
                                <div className="card" id={location.name}>
                                    <img className=" img card-img-top" src={require(`../media/profileImages${location.picture}`)} alt="Card image cap" />
                                    <div className="card-body" style={{ backgroundColor: "#1787e0" }}>
                                        <h5 className="card-title" style={{ color: "white" }}>{location.name}</h5>
                                        <p className="card-para">{location.mobile}</p>
                                        <p className="card-para">{location.address}</p>
                                    </div>
                                </div>
                            </div> */}
                        </>)
                    })}
                </div>
            </div>
        <div className="articles" id="articles">
        <h2 className="main-title">Animal Care Locations</h2>
        <div className="container">
          <div className="box">
            <img src={require(`./images/2.webp`)} alt="" />
            <div className="content">
              <h5>Animal Care Center</h5>
              <p className="detail">Our Service</p>
              <p className="detail">13th St-Cairo</p>
            </div>
            <div className="info">
              <Link to="" className="de">Details</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={require(`./images/dental.jpg`)} alt="" />
            <div className="content">
              <h5>Veterinary Hospital</h5>
              <p className="detail">Our Service</p>
              <p className="detail">13th St-Cairo</p>
            </div>
            <div className="info">
              <Link to="" className="de">Details</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={require(`./images/ss.jpg`)} alt="" />
            <div className="content">
              <h5>Animal Care Center</h5>
              <p className="detail">Our Service</p>
              <p className="detail">13th St-Cairo</p>
            </div>
            <div className="info">
              <Link to="" className="de">Details</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={require(`./images/dd.jpg`)} alt="" style={{height:'170px'}} />
            <div className="content">
              <h5>Animal Care Center</h5>
              <p className="detail">Our Service</p>
              <p className="detail">13th St-Cairo</p>
            </div>
            <div className="info">
              <Link to="" className="de">Details</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          
          
        </div>
      </div>
      <div className="spikes"></div>




            


            


                
        </>
    )
}
export default Locations;