import React from 'react';
const GameButtons = (props) => {
    return (
        <div className="sidebar">
            <h1 className='circle' onClick={ props.mainMenu }> ← </h1>
            <h1 className='circle' onClick={ props.restart }> ⟲ </h1>
            <h1 className='circle true'> { props.true }</h1>
            <h1 className='circle false'> { props.false }</h1>
        </div>
    )
}
export default GameButtons;