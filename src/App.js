import { useState } from 'react';
import './App.css';
import Main from './componet/Main/Main';
import Profile from './componet/Profile/Profile';
import Question from './componet/Question/Question';


function App() {
  const [playingTime, setPlayingTime] = useState([]);
  const handleTime = (time) => {
    setPlayingTime(time)
  }
  return (
    <div>
      <div className="App">
        <Main handleTime={handleTime}></Main>
        <Profile playingTime={playingTime}></Profile>
      </div>
      <Question></Question>
    </div>
  );
}

export default App;
