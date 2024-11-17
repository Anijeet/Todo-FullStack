import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdBrowserUpdated } from "react-icons/md";


const TodoCards = ({ title, description,id,delid }) => {
  return (
    <div className="text-colour rounded-xl m-3 p-3  shadow-lg shadow-gray">
      <div>
        <h1 className=" text-xl font-medium p-2">{title}</h1>
        <p className=" text-lg p-2">{description.split("", 70)}...</p>
      </div>
      <div className="flex justify-evenly ">
        <div className="flex text-xl text-red">
        <AiFillDelete className=" cursor-pointer  relative top-[5px] bg-background" onClick={()=>{
            delid(id)
        }}/>Delete
        </div>
        
      </div>
    </div>
  );
};

export default TodoCards;
