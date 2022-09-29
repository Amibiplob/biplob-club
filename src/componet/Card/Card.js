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
    
               
  return (
       <div className='card'>
        {
        fakeDB.map(data =>(
            <div className='card-data'>
            <img src={data.picture} alt="" />
            <h3>{data.name}</h3>
            <p>About : {data.about.slice(0,50)}</p>
            <p>Age : {data.age}</p>
            <p>Time : {data.time}m</p>
            <button className='btn-add'>button</button>
        </div>
        ))
       }
       </div>
    );
};

export default Card;