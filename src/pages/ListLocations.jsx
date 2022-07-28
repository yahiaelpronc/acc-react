import Cards from "../Components/ClassCard";
import img from './images/1.jpg';
import './PagesStatic/LocationPage.css';
import React, { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className=" container DivZZ">
        <h2 className="main-title my-5">Animal Care Locations</h2>
        <div className="container-fluid">
          <div className="fil row">
            <div className=" ServicesDiv col-4">
            <select required className="form-select" aria-label="Default select example" id='serv444'>
    <option selected value="">Services</option>
    <option value='Wellness Exams & Vaccinations'>Wellness Exams & Vaccinations</option>
    <option value='Boarding & Grooming Services'>Boarding & Grooming Services</option>
    <option value='Animal Emergency Services'>Animal Emergency Services</option>


</select>
            </div>
            <div className=" cities col-4">
            <select required  className="form-select" aria-label="Default select example" id="gov">
        <option selected value="">Choose City</option>
        <option value="Ad Daqahliyah">Ad Daqahliyah</option>
        <option value="Al Bahr al Ahmar">Al Bahr al Ahmar</option>
        <option value="Al Buhayrah">Al Buhayrah</option>
        <option value="Al Fayyum">Al Fayyum</option>
        <option value="Al Gharbiyah">Al Gharbiyah</option>
        <option value="Al Iskandariyah">Al Iskandariyah</option>
        <option value="Al Isma'iliyah">Al Isma'iliyah</option>
        <option value="Al Jizah">Al Jizah</option>
        <option value="Al Minufiyah">Al Minufiyah</option>
        <option value="Al Minya">Al Minya</option>
        <option value="Al Qahirah">Al Qahirah</option>
        <option value="Al Qalyubiyah">Al Qalyubiyah</option>
        <option value="Al Wadi al Jadid">Al Wadi al Jadid</option>
        <option value="Ash Sharqiyah">Ash Sharqiyah</option>
        <option value="As Suways">As Suways</option>
        <option value="Aswan">Aswan</option>
        <option value="Asyut">Asyut</option>
        <option value="Bani Suwayf">Bani Suwayf</option>
        <option value="Bur Sa'id">Bur Sa'id</option>
        <option value="Dumyat">Dumyat</option>
        <option value="Janub Sina'">Janub Sina'</option>
        <option value="Kafr ash Shaykh">Kafr ash Shaykh</option>
        <option value="Matruh">Matruh</option>
        <option value="Qina">Qina</option>
        <option value="Shamal Sina'">Shamal Sina'</option>
        <option value="Suhaj">Suhaj</option>

    </select>
            </div>
          </div>
        </div>


        <div className="articles" id="articles">
        <div className="container">
          <div className=" box" style={{height:"360px"}}>
            <img src={require(`./images/ccc.jpg`)} alt="" style={{height:"170px"}} />
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
          <div className=" box" style={{height:"360px"}}>
            <img src={require(`./images/2.webp`)} alt="" />
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
          <div className="box" style={{height:"360px"}}>
            <img src={require(`./images/dental.jpg`)} alt="" />
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
          <div className="box" style={{height:"360px"}}>
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



        </div>

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




    </>
  )
}
export default Locations;