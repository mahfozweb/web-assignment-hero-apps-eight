import React from 'react';
import heroImage from "../assets/hero.png"

const HeroImage = () => {
    return (
        <div className='flex justify-center mt-5'>
            <img src={heroImage} alt="" />
        </div>
    );
};

export default HeroImage;