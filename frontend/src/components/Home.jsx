import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[84%]">
      <div className=" justify-center items-center">
        <h1 className="home-text1 text-colour text-6xl relative left-16">Organize your </h1>
         <h1 className= "home-text2 text-colour text-6xl">work and life, finally.</h1>
         <h2 className=" home-text3 text-colour text-xl relative left-16 mt-4">Become focused, organized and calm with</h2>
         <h2 className="home-text4 text-colour text-xl relative left-16">todo app. The World <span className="text-text font-medium text-2xl">#1 </span>task manager app</h2>
         <Link to="/todo"><button className=" home-text5 bg-text relative left-48 mt-4 text-xl p-2 rounded-lg hover:text-text hover:bg-opacity-0 hover:border-2 hover:border-text transition duration-200">Make todo list</button></Link>
      </div>
    </div>
  );
};

export default Home;
