import React, { useState } from "react";
import "./TestSection.scss"
import ProgressBar from "../Progressbar";

/**
 * TestSection is dedicated to the test itself
 * @returns {JSX} React Component Test Section
 */
const TestSection = () => {
    const [progression, setProgression] = useState(30);
    const amount = 5;
    const handleIncrementBy = () => {
        let total = progression + amount
        if(total <= 100){
            setProgression(progression + amount)
        }
    }
    const handleIncrement = () => {
        if(progression < 100){
            setProgression(progression+1);
        }  
    }
    const handleDecrement = () => {
        if(progression > 0){
            setProgression(progression -1)
        }
    }
    return(
        <section className="container__test">
            <h2>TEST</h2>
            <div className="container__test-progressbar">
                <ProgressBar progression={progression} />
                <span>{`${progression}%`}</span>
            </div>
            
            <div className="container__test-buttons">
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleIncrementBy}>Increment by {amount}</button>
            </div>
        </section>
    )
}

export default TestSection;