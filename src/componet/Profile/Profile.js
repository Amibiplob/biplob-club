import React, { useState } from 'react';
import './Profile.css'
const Profile = () => {
    const [toggleTime, setToggleTime] = useState(0)
   localStorage.setItem("time" , toggleTime)
   let local = localStorage.getItem("time");
    return (
        <div className='profile'>
            <div className='profile-details'>
                <img src="pic.jpg" alt="" />
                <div className='profile-text'>
                    <h3>Biplob</h3>
                    <p>Tangail</p>
                </div>
            </div>
            <h2>Add A Break</h2>
            <div className='break'>
                <button className='break-btn' onClick={() => setToggleTime(10)}>10s</button>
                <button className='break-btn' onClick={() => setToggleTime(20)}>20s</button>
                <button className='break-btn' onClick={() => setToggleTime(30)}>30s</button>
                <button className='break-btn' onClick={() => setToggleTime(40)}>40s</button>
                <button className='break-btn' onClick={() => setToggleTime(50)}>50s</button>
            </div>
            <h2>Playing Details</h2>
            <div className='details'>
                <h3>
                    Playing time
                </h3>
                <h3>2000sec</h3>
            </div>
            <div className='details'>
                <h3>
                    Break time
                </h3>
                <h3>{{toggleTime} ? local : "{toggleTime}"} m</h3>
            </div>
            <button className='btn-complet'>Activity Completed</button>
        </div>
    );
};
const breakTime =(time) =>{
    //  console.log(time)
     }
     export{breakTime}
export default Profile;