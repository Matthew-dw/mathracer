import React from 'react';
import '../css/menu.css'

const Menu = () => {
    const letters = ['M','A','T','H','R','A','C','E','R'];
    return(
        <div className="Menu-container">
        <div className="Menu-letter-container">
        {letters.map((letter) => {
          return (
            <div className="Menu-letter">{letter}</div>
          )
        })}
        </div>
        <div className="Menu-button-container">
          <button className="Menu-button" > PLAY SOLO </button>
          <button className="Menu-button" > JOIN GAME </button>
          <button className="Menu-button" > HOST GAME </button>
        </div>
      </div>
    );
}  

export default Menu;
