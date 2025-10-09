import React from 'react';
import imageError from "../assets/App-Error.png"

const Error = () => {
    return (
       <div className='space-y-2'>
         <div className='flex justify-center items-center'>
            <img src={imageError} alt="" />
           
        </div>
        <h1 className='text-3xl font-bold flex justify-center'> 404 error found</h1>
       </div>
    );
};

export default Error;