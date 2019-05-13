import React from 'react';
const ProgressBar = (props) => {
    return (
        <div className="progress">
            <div className="progressbar">
                <div className="filler" style={{ width: `${props.fill}%` }} > </div>
                <h7 className="progresstext"> PLAYER {props.id} </h7>
            </div>
        </div>
        
    )
}
export default ProgressBar;