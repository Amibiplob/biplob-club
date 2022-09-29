import React, { useEffect, useState } from 'react';
import './Card.css'
const Card = () => {
    const [fakeDB ,setFakeDB] = useState([]);
    useEffect(() => {
        fetch('fakeDB.json')
        .then(res => res.json())
        .then(data => setFakeDB(data))
    },[])
 //   console.log(fakeDB)
 const playingTime =(time) =>{
    playingTime(time)
 }
               
  return (
       <div className='card'>
        {
        fakeDB.map(data =>(
            <div className='card-data'>
            <img src={data.picture} alt="" />
            <h3>{data.name}</h3>
            <p className='about'>About : {data.about.slice(0,50)}</p>
            <p><span>For Age : </span>{data.age}</p>
            <p><span>Time :</span> {data.time}m</p>
            <button className='btn-add' onClick={() =>playingTime(data.time)}>Add to list</button>
        </div>
        ))
       }
       </div>
    );
};

export default Card;