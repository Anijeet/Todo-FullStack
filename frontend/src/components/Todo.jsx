import React, { useState, useEffect } from "react";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

let id =sessionStorage.getItem("id")

const Todo = () => {

    const[Inputs,setInputs]=useState({title:"",description:""})
    const[Array,setArray]=useState([])

   
    

    const change=(e)=>{
        const {name,value}=e.target
        setInputs({...Inputs,[name]:value})

    }

    const  submit= async ()=>{
        if(Inputs.title==='' || Inputs.description ===''){
            toast.error('Please fill all the fields',{
                style: { backgroundColor: "black", color: "white"}
            })
        }else{
          if(id){
            await axios.post(`${window.location.origin}/api/v2/addTask`,{title:Inputs.title,description:Inputs.description,id:id})
            .then((response)=>{
              console.log(response)
            })
        setInputs({title:"",description:""})
        toast.success("Yout task is added.",{
            style: { backgroundColor: "black", color: "white" }
        })
          }else{
        setInputs({title:"",description:""})
        toast.success("Yout task is added but not saved.",{
            style: { backgroundColor: "black", color: "white" }
        })
          }
        
    }
    }

    const dis = (value) => {
        document.getElementById("todo-update").style.display = value;
      };

    const del =async (Cardid)=>{
      await axios.delete(`${window.location.origin}/api/v2/deleteTask/${Cardid}`,{
        data: {id: id},
      })
      .then((response)=>{
        toast.success("Yout task is deleted.",{
          style: { backgroundColor: "black", color: "white" }
      })
        
      })
    }

    useEffect(() => {
      if (id) {
        const fetch = async () => {
          await axios
            .get(`${window.location.origin}/api/v2/getTask/${id}`)
            .then((response) => {
              setArray(response.data.list);
            });
        };
        fetch();
      }
    }, [submit])

  return (
    <div>
        <ToastContainer className="bg-black" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-colour text-3xl font-bold">Create New Task</h1>
        <div className="flex flex-col relative m-9  h-[450px] w-[420px] shadow-text shadow-2xl rounded-3xl bg-colour">
            <input 
            onChange={change}
            name='title'
            value={Inputs.title}
            className="bg-colour m-7 p-2 mt-20 outline-none rounded-xl border-2 border-colour shadow-background shadow-lg" type="text" placeholder="Title" />

            <textarea 
            onChange={change}
            name='description'
            value={Inputs.description}
            className="bg-colour ml-7 mr-7 pb-32 p-2  outline-none rounded-xl border-2 border-colour shadow-background shadow-lg placeholder:relative placeholder:bottom-16" type="text" placeholder="Description" />
            <button onClick={submit} className="bg-gradient-to-r from-black to-background relative w-[70px] left-44 top-6 p-1 pr-4 pl-4 rounded-lg text-colour ">ADD</button>
        </div>
      
      </div>
      <div className="m-6">
        <div className="grid grid-cols-3 gap-4 ">
          {Array && Array.map((item, index,id) => (
            <TodoCards
              key={index}
              title={item.title}
              description={item.description}
              id={item._id}
              delid={del}
              display={dis}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
