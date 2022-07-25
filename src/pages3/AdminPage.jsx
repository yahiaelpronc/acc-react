import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

function AdminPage2(){
    
    const history=useHistory()

    const nameRegex = /^[a-zA-Z ]{3,30}$/
    const addressRegex = /^[a-zA-Z ]{3,40}$/
    const emailRegex = /\S+@\S+\.\S+/;
    const phonereg=/^(010|011|012|015)\d{8}$/



    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [address,setaddress]=useState(null)
    const [governorate,setgovernorate]=useState(null)
    const [mobile,setmobile]=useState(null)
    const [website_link,setwebsite_link]=useState(null)
    const [image,setimage]=useState(null)
    const [work_hours_start,setwork_hours_start]=useState(null)
    const [work_hours_end,setwork_hours_end]=useState(null)
    const [work_hours_start_period,setwork_hours_start_period]=useState(null)
    const [work_hours_end_period,setwork_hours_end_period]=useState(null)

    const [errdata,seterrdata]=useState({
        nameerr:"",
        emailerr:"",
        addresserr:"",
        mobileerr:"",
        work_hours_starterr:"",
        work_hours_enderr:"",

    })

    const changedata = (e)=>{
        if(e.target.name === "name"){
            setname(e.target.value)
            seterrdata({
                ...errdata,
                nameerr:nameRegex.test(e.target.value)?"":"input must be btw 3,30 char"
            })
        }else if(e.target.name === "email"){
            setemail(e.target.value)
            seterrdata({
                ...errdata,
                emailerr:emailRegex.test(e.target.value)?"":"input must be email"
            })
        }else if(e.target.name === "mobile"){
            setmobile(e.target.value)
            seterrdata({
                ...errdata,
                mobileerr:phonereg.test(e.target.value)?"":"phone should start with 01 and be 11 char"
            })
        }else if(e.target.name === "address"){
            setaddress(e.target.value)
            seterrdata({
                ...errdata,
                addresserr:addressRegex.test(e.target.value)?"":"address must be btw 3,40 char"
            })
        }else if(e.target.name === "work_hours_start"){
            setwork_hours_start(e.target.value)
            seterrdata({
                work_hours_starterr:e.target.value > 12 ? "should be less than 12":""
            })
        }else if(e.target.name === "work_hours_end"){
            setwork_hours_end(e.target.value)
            seterrdata({
                work_hours_enderr:e.target.value > 12 ? "should be less than 12":""
            })
        }
    }

    const Registerlocation = async()=>{
        const fielddata= new FormData()
        fielddata.append("name",name)
        fielddata.append("email",email)
        fielddata.append("mobile",mobile)
        fielddata.append("address",address)
        fielddata.append("picture",image)
        fielddata.append("governorate",governorate)
        fielddata.append("website_link",website_link)
        fielddata.append("work_hours_end",work_hours_end)
        fielddata.append("work_hours_start",work_hours_start)
        fielddata.append("work_hours_end_period",work_hours_end_period)
        fielddata.append("work_hours_start_period",work_hours_start_period)

        await axios({
            method:'post',
            url:'http://127.0.0.1:8000/api/insertLocation/',
            data:fielddata

        }).then((res)=> history.push("/") )
        .catch((err)=> console.log(err))
    }
    


    return(<>
            <div className='p-3 bg-light'>
                <div class="bg-danger p-5 d-flex justify-content-center">

                    <h1>Welcome Admin</h1>

                </div>

            </div>

            <div class=" p-5 bg-light my-3">

                <div class="row p-3 d-flex justify-content-between">

                    <div class="col-2">
                        <i  style= {{fontSize:"4rem"}}  class="fa-solid fa-lock text-danger"></i>

                    </div>

                    <div class="col-2">
                        <i style= {{fontSize:"4rem"}} class="fa-solid fa-screwdriver-wrench text-danger"></i>
                        
                    </div>

                </div>

            </div>

            <ul class="nav nav-tabs p-3 my-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Add Location</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Add 5 Projcts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Comments Reports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="" >Projcts Reports</a>
                </li>
            </ul>


            <div className='row p-2 my-2'>
                    
                    <img className='col-3 h-25 w-25 rounded' src={require(`./myimages/adminlocation2.jpg`)}/>
                    <div className='col-6 d-flex align-items-center justify-content-center '>
                        <h2 className=' text-danger my-4 '>Add New Location</h2>
                      
                        

                    </div>

            </div>


            <div className='row my-2 p-2'>

                    <div class="form-group mx-5 col-4">
         
                        <input type="text" class="form-control" onChange={(e) => changedata(e)}  name="name" value={name} required aria-describedby="emailHelp" placeholder="Enter location Name"/>
                        <p className='text-danger'>{errdata.nameerr}</p>

                    </div>
                    <div class="form-group col-4">
        
                        <input type="email" class="form-control" onChange={(e) => changedata(e)} name='email' value={email}  required aria-describedby="emailHelp" placeholder="Enter location email"/>
                        <p className='text-danger'>{errdata.emailerr}</p>

                    </div>


            </div>

            <div className='row my-2 p-2'>

                    <div class="form-group mx-5 col-4">
         
                        <input type="text" class="form-control" onChange={(e) => changedata(e)}  name="address" value={address} required aria-describedby="emailHelp" placeholder="Enter location address"/>
                        <p className='text-danger'>{errdata.addresserr}</p>

                    </div>
                    <div class="form-group col-4">
        
                        <select required value={governorate} name="governorate"   onChange={(e) => setgovernorate(e.target.value)} class="form-select" aria-label="Default select example">
                            <option selected>Choose Governorate</option>
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

            <div className='row my-2 p-2'>

                    <div class="form-group mx-5 col-4">
         
                        <input type="text" class="form-control" onChange={(e) => changedata(e)}  name="mobile" value={mobile} required aria-describedby="emailHelp" placeholder="Enter location mobile"/>
                        <p className='text-danger'>{errdata.mobileerr}</p>

                    </div>
                    <div class="form-group col-4">
        
                        <input type="text" class="form-control" onChange={(e) => setwebsite_link(e.target.value)} name='website_link' value={website_link}  required aria-describedby="emailHelp" placeholder="Enter location website_link"/>
                        

                    </div>


            </div>
            <div className='row my-2 p-2'>

                    <div class="form-group mx-5 col-4">
         
                        <input type="number" class="form-control" onChange={(e) => changedata(e)}  name="work_hours_start" value={work_hours_start} required aria-describedby="emailHelp" placeholder="Enter location work_hours_start"/>
                        <p className='text-danger'>{errdata.work_hours_starterr}</p>

                    </div>
                    <div class="form-group col-4">
        
                        <select required value={work_hours_start_period} onChange={(e) => setwork_hours_start_period(e.target.value)} name="work_hours_start_period"   class="form-select" aria-label="Default select example">
                            <option selected>Choose Period</option>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                            
                        </select>
                        

                    </div>


            </div>
            <div className='row my-2 p-2'>

                    <div class="form-group mx-5 col-4">
         
                        <input type="number" class="form-control" onChange={(e) => changedata(e)}  name="work_hours_end" value={work_hours_end} required aria-describedby="emailHelp" placeholder="Enter location work_hours_start"/>
                        <p className='text-danger'>{errdata.work_hours_enderr}</p>

                    </div>
                    <div class="form-group col-4">
        
                        <select required value={work_hours_end_period} name="work_hours_end_period" onChange={(e) => setwork_hours_end_period(e.target.value)}   class="form-select" aria-label="Default select example">
                            <option selected>Choose Period</option>
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                            
                        </select>
                        

                    </div>


            </div>
            <div className='row my-2 p-2'>

                <div class="form-group ms-2 col-5"  >

                    <span class="details">upload a profile pic.</span>
                    <input type="file" placeholder="upload" required id="file" name="profile_pic"  onChange={(e)=>setimage(e.target.files[0])}/>
                    <p id="fileerr"></p>




                </div>
            </div>

            <button onClick={Registerlocation} type="submit" disabled={errdata.nameerr || errdata.emailerr || errdata.mobileerr || errdata.addresserr || errdata.work_hours_starterr || errdata.work_hours_enderr} className='btn btn-danger my-4 p-2'>Submit</button>


    
     

           
        </>)

}
export default AdminPage2