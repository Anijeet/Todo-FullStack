import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { authActions } from '../store'

const Signin = () => {
  const dispatch=useDispatch()

  const history=useNavigate()

  const[Inputs,setInputs]=useState({email:"",password:""})

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };


  const submit = async (e)=>{
    e.preventDefault()
    await axios.post(`${window.location.origin}/api/v1/signin`,Inputs).then((response)=>{
      sessionStorage.setItem("id",response.data.user._id)
      dispatch(authActions.login())
      history('/todo')
    })
  }

  return (
    <div className="justify-center items-center h-[80%]">
      <div className="flex justify-center items-center ">
        <div className="h-[50vh] w-[26%] bg-colour shadow-text shadow-2xl  relative top-32 rounded-3xl justify-center items-center">
          <span className="bg-colour relative top-7 left-36 m-2 font-bold text-2xl">Sign In</span>
          <input 
           onChange={change}  name="email"
           value={Inputs.email}
            className="bg-colour relative top-28 right-[25px] mb-3 p-1 pr-20 outline-none rounded-xl border-2 border-colour shadow-background shadow-lg" type="email" placeholder="Email" />
          <input 
          onChange={change}  name="password"
          value={Inputs.password}
           className="bg-colour relative top-36 left-[68px] p-1 pr-20 outline-none rounded-xl border-2 border-colour shadow-background shadow-lg" type="password" placeholder="Password" />
          <button 
           onClick={submit}
            className="bg-gradient-to-r from-black to-background relative top-52 right-28  rounded-lg p-1 text-lg text-colour px-3">Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Signin