import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className=' flex flex-col min-h-screen w-[1100px] mx-auto'>
            <div className=' w-[700px] md:w-[1100px] mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className=' bg-[#D2D2D2] flex-1 w-[700px] md:w-[1100px] mx-auto '>
                <Outlet></Outlet>
            </div>
            <div className='w-[700px] md:w-[1100px] mx-auto'>
                <div className='w-[700px] md:w-[1100px] mx-auto'>
                    <Footer ></Footer>
                </div>
            </div>
        </div>
    );
};

export default Layout;