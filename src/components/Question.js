import React from 'react';
import '../css/question.css'

class Question extends React.Component {
    state = {
        q: this.props.question,
        answer: false,
    }
    
    render() {
        let q = this.state.q;

        const checkDigit = (e) => {
            console.log(this)
            if (q.correct !== null) return;
            q.attempt += e.key;
            let answer = q.answer().toString();

            if (q.attempt === answer) q.correct = true;
            for (let i = 0; i < q.attempt.length; i++)
                if (q.attempt[i] !== answer[i]) q.correct = false;

            this.setState({
                q: q,
                answer: q.correct
            })
        }

        return (
            <div className="question" onKeyDown={checkDigit} tabIndex="0">
                <h1>
                    {q.operand1} {q.operation} {q.operand2} = {q.attempt}
                </h1>
            </div>
        )
    }
}

export default Question;