import React from "react";
import { Link } from "react-router-dom";
class Table extends React.Component{

    constructor(props){
        super()
    }

    render(){
        return <>
    <div className='my-3 p-3'>
                    <table class="table table-success table-striped table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">Animal Name</th>
                                    <th scope="col">Vet Name</th>
                                    <th scope="col">Medication Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Medication Type</th>
                                    <th scope="col">Dosage</th>
                                    <th scope="col">Dosage Interval </th>
                                    <th scope="col">Adminstration Route</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                                <td>Bondok</td>
                                <td>Samy Adel</td>
                                <td>pharma X</td>
                                <td>22/3/2022</td>
                                <td>pills</td>
                                <td>200m</td>
                                <td>8 h</td>
                                <td>type1 </td>
                            </tr>
                            <tr>
                            <td>Bondok</td>
                                <td>Samy Adel</td>
                                <td>pharma X</td>
                                <td>22/3/2022</td>
                                <td>pills</td>
                                <td>200m</td>
                                <td>8 h</td>
                                <td>type1 </td>
                      
                            </tr>
                            <tr>
                            <td>Bondok</td>
                                <td>Samy Adel</td>
                                <td>pharma X</td>
                                <td>22/3/2022</td>
                                <td>pills</td>
                                <td>200m</td>
                                <td>8 h</td>
                                <td>type1 </td>
                        
                            </tr>
                         </tbody>
                    </table>

                </div>
        </>
    }
}
export default Table;