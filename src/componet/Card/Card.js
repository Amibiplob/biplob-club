import React from 'react';
import './Card.css'
const Card = () => {
    return (
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
            <h1>name</h1>
            <p>para</p>
            <p>para</p>
            <p>para</p>
            <button className='btn-add'>button</button>
        </div>
    );
};

export default Card;