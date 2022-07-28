import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './PagesStatic/NewSchedule.css';



function NewDetails(){


    return(
        <>
         <h2 className="main-title" id="lists">List Animal Locations</h2>
       
        <div className=" dogDev container-fluid">
            <div className="container-fluid row">
                <div className="col-xl-4">
                <img src={require(`./images/news.jpg`)} alt="" id="newsPhoto"/>
                </div>
                <div className="col-xl-4">
                <ul className="list-group list-group-flush" id="ull">
            <li className="list-group-item">
               <h5 id="qqq">Animal Care Center</h5>
                
            </li>
            <li className=" kk list-group-item">
            <div className="line">
            <i className="fas fa-map-marker-alt fa-fw"></i>
                            <span className="phSpan">Egypt St-Al Naser</span>
                        </div>
           
            </li>
            <li className=" kk list-group-item">
            <div className="line">
                            <i className="fas fa-phone-volume fa-fw" id="phone"></i>
                            <span className="phSpan">+208858548548</span>
                        </div>
           
            </li>
            <li className=" kk list-group-item">
            <i class="fa-solid fa-money-bill-wave" id="bill"></i>
            <span className="phSpan">Price Range</span>
                
            </li>
            <li className=" kk list-group-item">
            <i class="fa-solid fa-angles-right" id="serv"></i>
            <span className="phSpan">Operation Service</span>
                
            </li>
           
            
        </ul>
                </div>
                <div className=" colll col-xl-4">
                <div className="input-group mb-3">
         <input type="text" className=" det form-control" placeholder="Enter Desired Date" aria-label="Username" aria-describedby="basic-addon1"/>
         </div>
         <div className="input-group mb-3">
         <input type="text" className="det form-control" placeholder="Enter Desired Time" aria-label="Username" aria-describedby="basic-addon1"/>
       </div>
       <button className="btn " id="book">Book Service</button>

                
                </div>
            </div>
        </div>

        </>
    )
}
export default NewDetails;