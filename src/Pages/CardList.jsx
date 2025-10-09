import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { IoMdDownload } from "react-icons/io";

const CardList = ({card}) => {
     const {title, downloads, ratingAvg, id, image} = card
    return (
        <Link to={`/apps/${id}`} className='hover:scale-105 transition ease-in-out '>
       <div className="card bg-base-100 w-full md:w-65 h-full shadow-sm">
  <figure className='p-3'>
 <img src={image} alt="" />
  </figure>
  <div className="card-body">
   <div className='flex justify-center font-bold pb-10'>
     <h1>{title}</h1>
   </div>
    <div className="card-actions justify-around">
      <div className="badge badge-outline"><IoMdDownload />{downloads}</div>
      <div className="badge badge-outline "><FaStar />{ratingAvg}</div>
    </div>
  </div>
</div>
    </Link>
    );
};

export default CardList;