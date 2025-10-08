import React from "react";
import { Link } from "react-router";
import playImage from "../assets/play.png"
import appImage from "../assets/app-removebg-preview.png"

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-[100px] mt-5">
      <div>
        <h1 className="font-bold text-4xl"><span className="font-bold text-4xl">We Build</span> <br /><span className="text-[#9f62f2] font-bold text-4xl">Productive</span> Apps</h1>
      </div>
      <div>
        <p className="text-[#627382] text-[10px] font-semibold mt-2">We specialize in building reliable, user-friendly, and performance-driven apps. From planning to launch, <br />ProductiveApps ensures every product adds value to your workflow.</p>
      </div>
      <div className="flex justify-center items-center gap-10">
        <Link to={"https://play.google.com/store/games?hl=en"}><img className="w-[200px] h-[70px] font-bold shadow-2xl mt-5 rounded-[10px] p-1" src={playImage} alt="" /></Link>
      <Link to={"https://www.apple.com/app-store/"} className=" w-[200px] h-[70px] flex justify-center items-center font-bold shadow-2xl mt-5 rounded-[10px] p-3 ">
         <div   className=" flex justify-center items-center gap-5"> <img className="  w-[30px] h-[30px] " src={appImage} alt="" /> <p>App Store</p></div>
      </Link>
        
       
      </div>
    </div>
  );
};

export default Banner;
