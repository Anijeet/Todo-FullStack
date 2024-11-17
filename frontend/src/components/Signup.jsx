import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const Signup = () => {
const history=useNavigate()
  const[Inputs,setInputs]=useState({username:"",email:"",password:""})

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };


  const submit = async (e)=>{
    e.preventDefault()
    await axios.post(`${window.location.origin}/api/v1/register`,Inputs).then((response)=>{
      if(response.data.message ==="User already exists"){
        alert("User already exists")
      }
      else{
        alert("User created successfully");
      
      history('/signin')
      setInputs({username:"",email:"",password:""})
      }

    })


  }
  return (
    <div className="justify-center items-center h-[80%]">
      <div className="flex justify-center items-center ">
        <div className="h-[50vh] w-[26%] bg-colour shadow-text shadow-2xl  relative top-32 rounded-3xl justify-center items-center">
          <span className="bg-colour relative top-7 left-36 m-2 font-bold text-2xl">Sign Up</span>
          <input 
          onChange={change} 
          name="username"
          value={Inputs.username}
          
          className="bg-colour relative top-20 right-[36px] p-1 pr-20 outline-none rounded-xl border-2 border-colour shadow-background shadow-lg" type="text" placeholder="Username"   />
          <input   onChange={change}  name="email"
          value={Inputs.email}
           className="bg-colour relative top-28 left-[68px] p-1 pr-20 outline-none rounded-xl border-2 border-colour shadow-background shadow-lg" type="email" placeholder="Email" />
          <input 
            onChange={change}  name="password"
            value={Inputs.password}
             className="bg-colour relative top-36 left-[68px] p-1 pr-20 outline-none rounded-xl border-2 border-colour shadow-background shadow-lg" type="password" placeholder="Password" />
          <button 
          onClick={submit}
           className="bg-gradient-to-r from-black to-background relative top-44 left-32 rounded-lg p-1 text-lg text-colour px-3">Create account</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
