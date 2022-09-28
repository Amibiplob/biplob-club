import React from 'react';
import './Profile.css'
const Profile = () => {
    return (
        <div className='profile'>
            <div className='name'>
                <img src="https://amibiplob.github.io/img/mypic%20(3).jpg" alt="" />
                <h1>Biplob</h1>
            </div>
            <h1>Add A Break</h1>
            <div className='break'>
                <p>10</p>
                <p>20</p>
                <p>30</p>
                <p>40</p>
                <p>50</p>
            </div>
            <h1>Exercise Details</h1>
            <div className='details'>
                <h1>
                Exercise time
                </h1>
                <h1>2000sec</h1>
            </div>
            <div className='details'>
                <h1>
                Break time
                </h1>
                <h1>2000sec</h1>
            </div>
            <button className='btn-complet'>Activity Completed</button>
        </div>
    );
};

export default Profile;