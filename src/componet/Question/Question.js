import React from 'react';
import "./question.css"
const Question = () => {
    return (
        <div>
            <div>
                <h1>
                    How does the React work?
                </h1>
                <p>
                    <span>Ans :</span> React use virtual dom
                </p>
            </div>
            <div>
                <h1>
                Props VS State 
                </h1>
                <p>
                    <span>Ans :</span> Props are used to pass data from one component to another.
                    The state is a local data storage that is local to the component only and cannot be passed to other components.
                </p>
            </div>
            <div>
                <h1>
                UseEffect use for ?
                </h1>
                <p>
                    <span>Ans :</span>
                    The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                </p>
            </div>
        </div>
    );
};

export default Question;