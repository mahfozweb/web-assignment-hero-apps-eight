import React, { useEffect, useState } from "react";
import downl from "../assets/icon-downloads.png"
import { Link } from "react-router";
import icon from "../assets/icon-ratings.png"

const Installation = () => {
    const [sortOrder ,setSortOrder ] =useState('none')
  const [install, setInstall] = useState([]);
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("install"));
    if (saveList) setInstall(saveList);
  }, []);

const sortItem = () =>{
    if(sortOrder === 'downloads-asc'){
        return [...install].sort((a, b) =>parseFloat(a.downloads) -parseFloat(b.downloads))
    } else if (sortOrder === 'downloads-desc'){
        return [...install].sort((a, b) => parseFloat(b.downloads) -parseFloat(a.downloads))

    } else{
       return install
    }
    
    
}

console.log(sortItem());

  return (
    <>
      <div className=" pb-10">
        <div className="flex flex-col justify-center items-center mx-11 my-5">
          <h1 className="text-3xl font-bold px-10">Your Installed Apps</h1>
          <h1 className="text-[15px] text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </h1>
        </div>
        <div className="flex justify-between items-center mx-11">
          <h1 className="font-bold">
            <span>{install.length}</span> apps found
          </h1>
          <label className="form-control w-full max-w-xs">
            <select className="select select-bordered" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="none">Sort by download</option>
            <option value="downloads-asc">Low-&gt;High</option>
            <option value="downloads-desc">High-&gt;Low</option>
          </select>
          </label>
        </div>

        {/* card */}

       {
        sortItem().map(p =>  <div className="px-10 pt-5 w-[1100px]pb-10">
            <div className="card card-side h-[150px]  bg-base-100 shadow-sm">
          <figure>
            <img
            className=" w-full h-full object-cover rounded-[10px]"
              src={p.image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{p.title}</h2>
           <div className="flex items-center gap-10">
             <div className="flex items-center gap-3">
                <img src={downl} alt="" />
                <h1 className="font-bold text-3xl">{p.downloads}</h1>
             </div>
              <div className="flex items-center gap-3">
                <img src={icon} alt="" />
                <h1 className="font-bold text-3xl">{p.ratingAvg}</h1>
             </div>
           </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        </div>)
       }
      </div>
    </>
  );
};

export default Installation;
