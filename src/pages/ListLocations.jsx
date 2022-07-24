import React from "react";
import Cards from "../Components/ClassCard";
import img from './images/1.jpg';
import './PagesStatic/LocationPage.css';

function Locations(){



    return(
        <>
        
    <h2 className="main-title">Animal Care Locations</h2>

    <div className="container-fluid">
        <div className="container-fluid row">
            <div className="col-4">
            <Cards title="Animal Care Center" ground="#1787e0" photo={require(`./images/dental.jpg`)} para="Our Service" para1="13th St-cairo"/>
     </div>
            <div className="col-4">
            <Cards title="Animal Care Center" ground="#1787e0" photo={require(`./images/ccc.jpg`)} para="Our Service" para1="13th St-cairo"/>
            </div>
            <div className="col-4">
            <Cards title="Veterinary Hospital" ground="#1787e0" photo={require(`./images/dd.jpg`)} para="Our Service" para1="13th St-cairo"/>
            </div>
            

        </div>
    </div>
        </>
    )
}
export default Locations;