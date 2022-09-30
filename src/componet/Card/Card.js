import React, { useEffect, useState } from 'react';
import './Card.css'
const Card = ({ handleTime }) => {
    const [fakeDB, setFakeDB] = useState([]);
    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => setFakeDB(data))
    }, [])
    //   console.log(fakeDB)
  //  console.log(handleTime)
    return (
        <div className='card'>
            {
                fakeDB.map(data => (
                    <div className='card-data' key={data.id}>
                        <img src={data.picture} alt="" />
                        <h3>{data.name}</h3>
                        <p className='about'><span className='about-item'>About : </span>{data.about.slice(0, 50)}</p>
                        <p><span className='about-item'>For Age : </span>{data.age}</p>
                        <p><span className='about-item'>Time :</span> {data.time}m</p>
                        <button className='btn-add' onClick={() => handleTime((current) => current + data.time)}>Add to list</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;