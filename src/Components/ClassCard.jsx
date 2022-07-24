import React from "react";
import { Link } from "react-router-dom";
class Cards extends React.Component{

    constructor(props){
        super()
    }

    render(){
        return <>
             <div className="card">
             <Link to="">
             <img className=" img card-img-top" src={this.props.photo} alt="Card image cap"/>
             </Link>
                <div className="card-body" style={{backgroundColor:this.props.ground}}>
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-para">{this.props.para}</p>
                    <p className="card-para">{this.props.para1}</p>
                </div>

                </div>
  

  
        </>
    }
}
export default Cards;