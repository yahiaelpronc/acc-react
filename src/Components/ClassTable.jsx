import React from "react";
import { Link } from "react-router-dom";
class Table extends React.Component{

    constructor(props){
        super()
    }

    render(){
        return <>
        <table className="table container">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Medication</th>
      <th scope="col">Dosage</th>
      <th scope="col">Interval</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{this.props.Med1}</td>
      <td>{this.props.Dos1}</td>
      <td>{this.props.interval1}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  
        </>
    }
}
export default Table;