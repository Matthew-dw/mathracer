import React from 'react';
import GameLogic from '../game';
import Question from './Question';

export default class Game extends React.Component {
    state = {
        game: new GameLogic(20, 20),
        total: 20,
        answered: [],
        correct: []
    }
    render() {
        return (
            <div>
                <Question question={ this.state.game.next() } />
                { this.state.answered.map((q) => {
                    return (
                        <Question question={q} />
                    )
                })}
            </div>
        )
    }
}