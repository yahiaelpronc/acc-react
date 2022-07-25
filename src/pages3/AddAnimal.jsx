


import React from 'react'
import axios from 'axios'
import { useState } from 'react'


import { useHistory } from "react-router-dom";

function AddAnimal(){
    const history=useHistory()

    const nameRegex = /^[a-zA-Z ]{3,30}$/
    // const [changedata,set]
    const [animalname,setanimalname]=useState("")
    const [ownerusername,setownerusername]=useState("")
    const [weight,setweight]=useState(null)
    const [b_date,setb_date]=useState(null)
    const [gender,setgender]=useState(null)
    const [species,setspecies]=useState(null)
    const [image,setimage]=useState(null)
    const [female_state,setfemalestate]=useState(null)

    const[displayFemaleState,setDisplayFemaleState]=useState(false)

    const [errdata,seterrdata]=useState({
        animalnameerr:"",
        errusername:"",
        errweight:"",

    })
    const changedata= (e)=>{
        if(e.target.name === "animalname"){
            setanimalname(e.target.value)
            seterrdata({
                ...errdata,
                animalnameerr: nameRegex.test(e.target.value) ?  "":"input must be btw 3,30 char"

            })

        }else if(e.target.name === "ownerusername"){

            setownerusername(e.target.value)
            seterrdata({
                ...errdata,
                errusername:nameRegex.test(e.target.value)? "":"input must be btw 3,30 char"
            })
        }else if(e.target.name === "weight"){
            setweight(e.target.value)
            seterrdata({
                ...errdata,
                errweight:weight > 0 ? "" : "weight must be greater than 0"
            })
        }
    }

    const changeGender=(e)=>{
        setgender(e.target.value)
        if(e.target.value === "f"){
            setDisplayFemaleState(true)
            


        }else{
            setDisplayFemaleState(false)
        }

    }


    const RegisterAnimal = async ()=>{
        let formField= new FormData()
        formField.append("animalName",animalname)
        formField.append("ownerUsername",ownerusername)
        formField.append("weight",weight)
        formField.append("b_date",b_date)
        formField.append("picture",image)
        formField.append("gender",gender)
        formField.append("species",species)
        formField.append("female_state",female_state)
        await axios({
            method:'post',
            url:'http://127.0.0.1:8000/api/insertAnimal/',
            data:formField

        }).then((response)=> history.push("/"))
        .catch((err) => console.log(err))

        
        
    }




    return(<>

            <div className='bg-light p-3'>
                <div className='row p-2 my-2'>
                    
                    <img className='col-3 h-25 w-25 rounded' src={require(`./myimages/addanimal1.jpg`)}/>
                    <div className='col-6 d-flex align-items-center justify-content-center '>
                        <h2 className=' text-danger my-4 '>Add New Animal</h2>
                      
                        

                    </div>

                </div>


              
                <div className='row my-2 p-2'>

                    <div class="form-group mx-5 col-4">
         
                        <input type="text" class="form-control" onChange={(e) => changedata(e)}  name="animalname" value={animalname} required aria-describedby="emailHelp" placeholder="Enter Animal Name"/>
                        <p className='text-danger'>{errdata.animalnameerr}</p>

                    </div>
                    <div class="form-group col-4">
        
                        <input type="text" class="form-control" onChange={(e) => changedata(e)} name='ownerusername' value={ownerusername}  required aria-describedby="emailHelp" placeholder="Enter owner username"/>
                        <p className='text-danger'>{errdata.errusername}</p>

                    </div>


                </div>



                <div className='row my-2 p-2'>

                    <div class="form-group mx-5 col-4">

                        <input type="number" class="form-control" onChange={(e) => changedata(e)}  name="weight" value={weight} required aria-describedby="emailHelp" placeholder="Enter Animal weight"/>
                        <p className='text-danger'>{errdata.errweight}</p>

                    </div>
                    <div class="form-group col-4">

                        <input type="date" class="form-control" onChange={(e) => setb_date(e.target.value)} name='b_date' value={b_date}  required aria-describedby="emailHelp" placeholder="Enter Animal birth date"/>

                    </div>


                </div>


                <div className='row my-2 p-2'>

                    <div class="form-group mx-5 col-4">

                        <select required value={gender} name="gender" onChange={(e)=>changeGender(e)}  class="form-select" aria-label="Default select example">
                            <option selected>Choose Animal Gender</option>
                            <option value="m">MALE</option>
                            <option value="f">Female</option>
                            
                        </select>

                    </div>
                    <div class="form-group col-4">
                        <select required value={species} name="species" onChange={(e)=>setspecies(e.target.value)}  class="form-select" aria-label="Default select example">
                            <option selected>Choose Animal species</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                            <option value="cow">Cow</option>
                            
                        </select>

                       
                    </div>


                    


                </div>

                
                <div className='row my-2 p-2'>

                    <div class="form-group ms-2 col-5"  >
                   
                        <span class="details">upload a profile pic.</span>
                        <input type="file" placeholder="upload" required id="file" name="profile_pic"  onChange={(e)=>setimage(e.target.files[0])}/>
                        <p id="fileerr"></p>

                
                 

                    </div>

                    <div class="form-group col-4">

                        <select required value={female_state} style={{ display: displayFemaleState? "block" :"none" }} name="female_state" onChange={(e)=>setfemalestate(e.target.value)}  class="form-select" aria-label="Default select example">
                            <option selected>Choose  female_state</option>
                            <option value="immature">immature</option>
                            <option value="mature&married">mature & married</option>
                            <option value="pregnant">pregnant</option>
                            <option value="lactating">lactating</option>
                            
                        </select>
                    </div>


                </div>

                <button onClick={RegisterAnimal} type="submit" disabled={errdata.animalnameerr || errdata.errusername || errdata.errweight} className='btn btn-danger my-4 p-2'>Submit</button>

              


            </div>
        </>)

}
export default AddAnimal