import React from 'react';
import './Profile.css'
const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-details'>
               <div>
               <img src="https://amibiplob.github.io/img/mypic%20(3).jpg" alt="" />
               </div>
               <div>
                 <h3>Biplob</h3>
                <p>Tangail</p>
               </div>
            </div>
            <h2>Add A Break</h2>
            <div className='break'>
                <button className='break-btn'>10</button>
                <button className='break-btn'>20</button>
                <button className='break-btn'>30</button>
                <button className='break-btn'>40</button>
                <button className='break-btn'>50</button>
            </div>
            <h2>Exercise Details</h2>
            <div className='details'>
                <h3>
                Exercise time
                </h3>
                <h3>2000sec</h3>
            </div>
            <div className='details'>
                <h3>
                Break time
                </h3>
                <h3>2000sec</h3>
            </div>
            <button className='btn-complet'>Activity Completed</button>
        </div>
    );
};

export default Profile;