import React, { useState } from "react";
import useCards from "../Hooks/useCards";
import CardList from "./CardList";

const AllCards = () => {
    const { cards } = useCards();
    const [search , setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchCards = term 
    ? cards.filter(card => card.title.toLocaleLowerCase().includes(term)) 
    : cards
    const states = searchCards.length === 0 && "No Apps Found"
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-3">
        <h1 className="font-bold text-4xl">Our All Applications</h1>
        <p className="font-semibold ">
          Explore All Trending Apps on the market developed by us. we code for
          Millions
        </p>
      </div>
      <div className="flex justify-between">
        <h1 className="ml-10 py-10 font-semibold">
          ({searchCards.length}) Apps Found
        </h1>
        <label className="input flex justify-center items-center m-7 ">
          <input value={search} onChange={(e) => setSearch(e.target.value)} className="" type="search" placeholder="Search apps" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4  px-5">
        {searchCards.map((card) => (
          <CardList card={card}></CardList>
        ))}
      </div>
     <div className=" flex justify-center">
         <h1 className="font-bold text-4xl ">{states}</h1>
     </div>
      <div className="flex justify-center items-center text-5xl font-bold text-gray-600">
      </div>
     <div className="flex justify-center items-center text-3xl">
      
     </div>
    </div>
  );
};

export default AllCards;
