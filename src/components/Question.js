import React from 'react';
import '../css/question.css'

class Question extends React.Component {
    state = {
        n1: this.rnum(20) + 1,
        n2: this.rnum(20) + 1,
        op: ['+','-'][Math.floor(Math.random() * 2)],
        attempt: '',
        correct: null
    }
    
    rnum(x) {
        return 1 + Math.floor(Math.random() * x);
    }

    answer() {
        switch (this.state.op) {
            case '+': return this.state.n1 + this.state.n2;
            case '-': return this.state.n1 - this.state.n2;
            default: return null;
        }
    }

    handleKey = (e) => {
        if (this.state.correct !== null) return;
        if (e.key !== '-' && isNaN(e.key)) return;
        let answer = this.answer().toString();
        let attempt = this.state.attempt + e.key
        this.setState({ attempt: this.state.attempt + e.key })

        if (attempt === answer)
            this.setState({ correct: true})
        else 
            for (let i = 0; i < attempt.length; i++)
                if (attempt[i] !== this.answer().toString()[i]) 
                    this.setState({ correct: false})
        
        console.log('answer: ' + answer + ' attempt: ' + attempt + ' comparison: ' + (attempt === answer))
    }

    render() {
        return (
            <div className={`question ${this.state.correct}`} onKeyDown={ this.handleKey } tabIndex="0">
                <h1>
                    { this.state.n1 } { this.state.op } { this.state.n2 } = { this.state.attempt }
                </h1>
            </div>
        )
    }
}

export default Question;