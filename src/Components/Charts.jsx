import React from 'react';
import { useParams } from 'react-router';
import useCards from '../Hooks/useCards';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Charts = () => {
   const {cards}= useCards()
    const {id} = useParams()
    console.log( cards)
  const card = cards.find((card) => card.id === Number(id));
  // if(loading) return <p>Loading...........</p>
  const { title,ratings, companyName, description, reviews, ratingAvg, downloads } =
    card || {};
    const chartData = ratings
    console.log(chartData);
    
    return (
        <div>
            <h3>Charts :</h3>
          <BarChart
        width={600}
        height={300}
        data={chartData}
        layout="vertical" // ← এই লাইনটাই সবচেয়ে গুরুত্বপূর্ণ
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis type="number" /> {/* count যাবে X-axis এ */}
        <YAxis dataKey="name" type="category" stroke="#8884d8" /> {/* name যাবে Y-axis এ */}
        <Tooltip />
        <Bar dataKey="count" fill="#00d390" barSize={30} />
      </BarChart>
        </div>
    );
};

export default Charts;