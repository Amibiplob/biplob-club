import React from 'react';
import Card from '../Card/Card';
import "./Main.css"
const Main = ({ handleTime }) => {
    // console.log( handleTime)
    return (
        <div className='main'>
            <div className='title'>
            <h1>BIPLOB-CLUB</h1>
            <p>Select Your Item</p>

            </div>
            <Card handleTime={handleTime}></Card>
        </div>
    );
};

export default Main;