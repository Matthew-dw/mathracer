import React from 'react';
import '../css/menu.css'

const Menu = (props) => {
    const letters = ['M','A','T','H','R','A','C','E','R'];
    return(
        <div className="Menu-container">
        <div className="letter-container">
        {letters.map((letter, i) => {
          return (
            <div key={i} className="letter">{letter}</div>
          )
        })}
        </div>
        <div className="button-container">
          <button className="button" onClick={ props.soloPlay }> PLAY SOLO </button>
          <button className="button" > JOIN GAME </button>
          <button className="button" > HOST GAME </button>
        </div>
      </div>
    );
}  

export default Menu;
