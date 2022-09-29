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
            <img src="https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
            <h3>{data.name}</h3>
            <p>para</p>
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