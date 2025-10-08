import React from 'react';
import useCards from '../Hooks/useCards';
import CardList from './CardList';


const AllCards = () => {
    const {cards} = useCards()
    console.log(cards);
    
    return (
        <div>
        <div className="flex flex-col justify-center items-center p-3">
          <h1 className="font-bold text-4xl">Our All Applications</h1>
          <p className="font-semibold ">
            Explore All Trending Apps on the market developed by us. we code for Millions
          </p>
        </div>
        <div className='flex justify-between' >
            <h1 className='ml-10 py-10 font-semibold'>({cards.length}) Apps Found</h1>
            <h1 className='mr-10 py-10 font-semibold'>Search</h1>
        </div>
        <div className="grid grid-cols-4 gap-4  px-5">
          {cards.map((card) => (
            <CardList card={card}></CardList>
          ))}
        </div>
      </div>
    );
};

export default AllCards;