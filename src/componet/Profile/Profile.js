import React, { useState } from 'react';
import './Profile.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Profile = ({ playingTime }) => {
    const [breakTime, setBreakTime] = useState(0)
    //   console.log(breakTime)
    localStorage.setItem("time", breakTime)
    let local = localStorage.getItem("time");
    
    // console.log(playingTime)
    const notify = () => {
        // Set to 10sec
        toast.warning('Danger', { autoClose: 10000 });
        // Set to 3sec
        toast.success('successful', { autoClose: 3000 });
    }
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
                <button className='break-btn' onClick={() => setBreakTime(10)}>10s</button>
                <button className='break-btn' onClick={() => setBreakTime(20)}>20s</button>
                <button className='break-btn' onClick={() => setBreakTime(30)}>30s</button>
                <button className='break-btn' onClick={() => setBreakTime(40)}>40s</button>
                <button className='break-btn' onClick={() => setBreakTime(50)}>50s</button>
            </div>
            <h2>Playing Details</h2>
            <div className='details'>
                <h3>
                    Playing time
                </h3>
                <h3>{playingTime} m</h3>
            </div>
            <div className='details'>
                <h3>
                    Break time
                </h3>
                <h3>{{ breakTime } ? local : 'breakTime'} m</h3>
            </div>
            <button className='btn-complet' onClick={notify}>Activity Completed</button>
        </div>
    );
};

export default Profile;