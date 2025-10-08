import React from 'react';

const States = () => {
    return (
        <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] '>
           <div className='text-white flex justify-center items-center font-semibold'>
             <h1 className='text-[35px] pt-5'>Trusted by Millions, Built for You</h1>
           </div>
          <div className='flex flex-col md:flex-row  justify-between p-10 px-40 text-white'>
            <div className='flex flex-col justify-center items-center' >
            <h1 className='text-[15px]'>Total Downloads</h1>
            <h1 className='text-[40px] font-bold '>29.6M</h1>
            <h1 className='text-[15px]'>21% more than last month</h1>
           </div >
           <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[15px]'>Total Reviews</h1>
            <h1 className='text-[40px] font-bold '>906K</h1>
            <h1 className='text-[15px]'>46% more than last month</h1>
           </div>
           <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[15px]'>Active Apps</h1>
            <h1 className='text-[40px] font-bold '>132+</h1>
            <h1 className='text-[15px]'>31 more will Launch</h1>
           </div>
           
          </div>
          
        </div>
    );
};

export default States;