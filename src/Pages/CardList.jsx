import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const CardList = ({card}) => {
     const {title, downloads, ratingAvg, id} = card
    return (
        <Link to={"/cardDetails"} className='hover:scale-105 transition ease-in-out '>
       <div className="card bg-base-100 w-65 h-full shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div className='flex justify-center font-bold pb-10'>
     <h1>{title}</h1>
   </div>
    <div className="card-actions justify-around">
      <div className="badge badge-outline">{downloads}</div>
      <div className="badge badge-outline"><FaStar />{ratingAvg}</div>
    </div>
  </div>
</div>
    </Link>
    );
};

export default CardList;