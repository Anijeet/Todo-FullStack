import React from "react";
import { SiBookstack } from "react-icons/si";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { authActions } from '../store'
import {useNavigate} from 'react-router-dom'


const Navbar = () => {
  const history=useNavigate()

  const dispatch=useDispatch()

  const logout =() =>{
    sessionStorage.clear("id")
    dispatch(authActions.logout())
    history("/");

  }

  const isLoggedIn =useSelector((state)=> state.isLoggedIn)
  return (
    <>
      <div className="flex justify-between ">
        <div >
          <h1 className="flex text-3xl text-text font-bold mt-12 relative left-12 hover:text-colour transition duration-200 cursor-pointer "><SiBookstack  className="relative top-2" />todo</h1>
        </div>
        <div className="flex text-colour gap-3 text-lg mt-12 mr-10">
         <Link to='/'><button className=" nav hover:border-2  hover:border-text hover:text-text transition duration-300 px-3 py-0 hover:rounded-lg font-semibold">Home</button></Link>
         <Link to='/about'><button className=" nav hover:border-2 hover:border-text hover:text-text transition duration-300 px-3 py-0 hover:rounded-lg font-semibold">About</button></Link>
         <Link to='/todo'><button className=" nav hover:border-2 hover:border-text hover:text-text transition duration-300 px-3 py-0 hover:rounded-lg font-semibold">Todo</button></Link>
         {!isLoggedIn && <><Link to='/signout'><button className=" nav hover:border-2 hover:border-text hover:text-text transition duration-300 px-3 py-0 hover:rounded-lg font-semibold">SignUp</button></Link>
          <Link to='/signin'><button className=" nav hover:border-2 hover:border-text hover:text-text transition duration-300 px-3 py-0 hover:rounded-lg font-semibold">SignIn</button></Link></>}
         {isLoggedIn && <><Link to='/'><button 
         onClick={logout}
         className=" nav hover:border-2 hover:border-text hover:text-text transition duration-300 px-3 py-0 hover:rounded-lg font-semibold">Log Out</button></Link></>}
         
         
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
