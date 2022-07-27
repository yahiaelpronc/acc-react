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
  function o(location) {
    if (location.picture === null | location === undefined) {
      return "/ACC Logo.png"
    } else {
      return location.picture
    }
  }
  // `../media/profileImages${location.picture}`
  return (
    <>
      <div className="articles" id="articles">
        <h2 className="main-title">Animal Care Locations</h2>
        <div className="container">
          {locations.map(location => {
            return (<>
              <Link to={`detailslocations/${location.id}`} style={{ textDecoration: "none", color: "black" }}>
                <div className="box">
                  <img src={require(`../media/profileImages${o(location)}`)} alt="" style={{ maxHeight: "190px" }} />
                  <div className="content">
                    <h5>{location.name}</h5>
                    <p>{location.service}</p>
                    <p>{location.address}</p>
                    <p>{location.mobile}</p>
                    <p>{location.work_hours_start}-{location.work_hours_start_period} : {location.work_hours_end}-{location.work_hours_end_period}</p>
                  </div>
                  <div className="info">
                    <Link>Details</Link>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </div>
              </Link>
            </>)
          })}

        </div>
      </div>
      <div className="spikes"></div>











    </>
  )
}
export default Locations;