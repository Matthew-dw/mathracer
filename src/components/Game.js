import React from 'react';
import Question from './Question';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    state = {
        questions: this.initialize(this.props.settings.size),
        current: this.props.settings.size - 1,
        correct: 0,
    }

    componentDidMount() {
        this.input.current.focus();
    }

    initialize(n) {
        let questions = [];
        for (let i = 0; i < n; i++) {
            questions.push({
                n1: this.rnum(20) + 1,
                n2: this.rnum(20) + 1,
                op: ['+','-'][Math.floor(Math.random() * 2)],
                attempt: '',
                correct: null,
            })
        }
        return questions;
    }

    rnum(x) { return 1 + Math.floor(Math.random() * x); }

    answer(i) {
        let q = this.state.questions[i];
        return (q.op === '+') ? q.n1 + q.n2 : q.n1 - q.n2;
    }

    numcorrect() { return this.state.questions.reduce((q) => q.correct ? 1 : 0) }

    handleKey = (e) => {
        let id = this.state.current;
        if (id === -1) return;
        let questions = this.state.questions;
        let answer = this.answer(id).toString();
        let attempt = questions[id].attempt + e.key;
        let diff = 0;
        
        if (e.key !== '-' && isNaN(e.key)) return;

        questions[id].attempt = questions[id].attempt + e.key;

        if (questions[id].attempt === answer) {
            questions[id].correct = true;
            this.setState({ correct: this.state.correct + 1})
            diff = -1;
        } else {
            for (let i = 0; i < attempt.length; i++) {
                if (questions[id].attempt[i] !== answer[i]) {
                    questions[id].correct=false;
                    diff = -1
                }
            }
        }
        this.setState({ questions: questions, current: id + diff})
    }

    render() {
        let style = { 'marginTop': `${ (this.state.current - 3) * -168}px` }
        if (this.state.current === -1) {
            style = { 'marginTop': `100vh` }
        }
        return (
            <div className='game-container'>
                <div className="sidebar">
                    <h1 className='circle' onClick={ this.props.mainMenu }> ← </h1>
                    <h1 className='circle' onClick={ this.props.soloPlay }> ⟲ </h1>
                    <h1 className='circle true'> { this.state.correct }</h1>
                    <h1 className='circle false'> { this.props.settings.size - this.state.current - this.state.correct - 1 }</h1>
                </div>
                
                <div onKeyDown={ this.handleKey } tabIndex="0" className="question-container" style={style} ref={this.input}>
                    { this.state.questions.map((q, i) => { return (
                        <Question key={i} n1={q.n1} n2={q.n2} op={q.op} attempt={q.attempt} correct={q.correct} current={ this.state.current === i }/>
                    )})}
                </div>

                <div className="sidebar">

                </div>
            </div>
        )
    }
}