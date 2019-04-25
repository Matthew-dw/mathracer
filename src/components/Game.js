import React from 'react';
import Question from './Question';

export default class Game extends React.Component {
    state = {
        questions: this.initialize(20),
    }
    initialize(n) {
        let questions = [];
        for (let i = 0; i < n; i++)
            questions.push(<Question />)
        return questions;
    }
    render() {
        return (
            <div>
                { this.state.questions.pop() }
            </div>
        )
    }
}