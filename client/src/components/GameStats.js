import React from 'react';
import ProgressBar from './ProgressBar'
import '../css/gamestats.css'
const GameStats = (props) => {
    return (
        <div className="gamestats">
            <div className="progresscontainer"> 
                {props.time}
                <h1> STANDINGS </h1>
                <ProgressBar fill={ props.fill } id={1} />
            </div>
        </div>
        
    )
}
export default GameStats;