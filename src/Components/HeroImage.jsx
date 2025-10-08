import React from 'react';
import heroImage from "../assets/hero.png"

const HeroImage = () => {
    return (
        <div className='flex justify-center mt-5'>
            <img className='md:w-[50%] h-[50%]' src={heroImage} alt="" />
        </div>
    );
};

export default HeroImage;