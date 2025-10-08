import React from 'react';
import { Link } from 'react-router';
import logoImg from "../assets/logo.png"
import gitImage from "../assets/github.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <Link ><a>Home</a></Link>
      <Link >Apps</Link>
      <Link><a>Installation</a></Link>
      </ul>
    </div >
   <Link  className='flex items-center'>
   <img  className='w-[50px] h-[50px]' src={logoImg} alt="" />
   <span className='font-semibold'>HERO.IO</span>
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to={"/home"} className='mr-5 font-semibold hover:bg-red-400'>Home</Link>
      <Link to={"/apps"} className='mr-5 font-semibold hover:bg-red-400'>Apps</Link>
      <Link to={"/application"} className='mr-5 font-semibold hover:bg-red-400'>Installation</Link>
      
    </ul>
  </div>
  <div className="navbar-end ">
    <Link to={"https://github.com/mahfozweb/web-assignment-hero-apps-eight"} className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"><span><img src={gitImage} alt="" /></span> Contribute</Link>
  </div>
</div>
    );
};

export default Navbar;