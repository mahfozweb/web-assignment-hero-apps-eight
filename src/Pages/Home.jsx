import React from "react";
import Banner from "../Components/Banner";
import HeroImage from "../Components/HeroImage";
import States from "../Components/States";
import Cards from "./Cards";
import { Link,  } from "react-router";
import useCards from "../Hooks/useCards";

const Home = () => {
     const {cards, loading} = useCards()
  const featuredCards = cards.slice(0, 8);
  return (
    <div>
      <Banner></Banner>
      <HeroImage></HeroImage>
      <States></States>

      <div>
        <div className="flex flex-col justify-center items-center p-3">
          <h1 className="font-bold text-4xl">Trending Apps</h1>
          <p className="font-semibold ">
            Explore All Trending Apps on the market developed by us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4  px-5">
          
          {featuredCards.map((card) => (
            <Cards key={card.id} card={card}></Cards>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Link to={"/apps"} className="w-[250px] btn btn-primary my-10 ">Show All</Link>
        </div>
    </div>
  );
};

export default Home;
