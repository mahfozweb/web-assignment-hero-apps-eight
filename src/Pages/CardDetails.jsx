import React, { useState } from "react";
import { Link, useParams } from "react-router";
import useCards from "../Hooks/useCards";
import logoImage from "../assets/logo.png";
import icon from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import { ToastContainer, toast } from "react-toastify";
import Charts from "../Components/Charts";

const CardDetails = () => {
  const [state, setState] = useState(true);
  const { id } = useParams();
//   console.log(id);
  
  const { cards, loading } = useCards();
  const card = cards.find((card) => card.id === Number(id));
  // if(loading) return <p>Loading...........</p>
  const { title, companyName, description, reviews, ratingAvg, downloads } =
    card || {};
  const handleInstall = () => {
    setState(false);
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updateList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === card.id);
      if (isDuplicate) return alert("sorry add already exit");
      updateList = [...existingList, card];
    } else {
      updateList.push(card);
    }
    localStorage.setItem("install", JSON.stringify(updateList));
    toast("Install Successfully");
  };

  return (
    <>
      <div className="flex items-center gap-2 ">
        <div className="left p-10 ">
          <img className="w-[200px] h-[200px] " src={logoImage} alt="" />
        </div>
        <div className="right">
          <div className="pb-10">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1 className="text-[10px]">
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </h1>
            <p className="border-b mt-2"></p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div>
              <img src={icon} alt="" />
              <h1>Downloads</h1>
              <h1 className="text-3xl font-bold">{downloads}</h1>
            </div>
            <div>
              <img src={rating} alt="" />
              <h1>Average Ratings</h1>
              <h1 className="text-3xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <img src={review} alt="" />
              <h1>Total Reviews</h1>
              <h1 className="text-3xl font-bold">
                {reviews}
                <span>K</span>
              </h1>
            </div>
          </div>
          <div className={`mt-10 text-white font-bold`}>
            <button
              disabled={!state}
              onClick={() => handleInstall()}
              className="bg-[#00d390] p-2 "
            >
              {state ? "Install Now" : "Installed"}
            </button>
          </div>
        </div>
      </div>
    {/* recharts */}
     <div className="pl-10 pt-10">
            <Charts cards={cards }></Charts>
        </div>

      <div className="mx-10 py-10">
        <h1 className="font-bold text-2xl p-5"> Description</h1>
        <p>{description}</p>
      </div>
      <ToastContainer />
    </>
  );
};

export default CardDetails;
