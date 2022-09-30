import React from 'react';
import Card from '../Card/Card';
import "./Main.css"
const Main = ({ handleTime }) => {
    // console.log( handleTime)
    return (
        <div className='main'>
            <h1 className='title'>BIPLOB-CLUB</h1>
            <p>Select Your Item</p>
            <Card handleTime={handleTime}></Card>
        </div>
    );
};

export default Main;