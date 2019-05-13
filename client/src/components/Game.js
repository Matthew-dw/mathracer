import React from 'react';
import Question from './Question';
import GameButtons from './GameButtons'
import GameStats from './GameStats'
import '../css/game.css'

export default class Game extends React.Component {
    // State
    state = {
        questions: this.initialize(this.props.settings.size),
        current: this.props.settings.size - 1,
        time: 0
    }
    input = React.createRef();

    // Lifecycle
    componentDidMount() {
        this.input.current.focus();
        this.interval = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
    }

    // Methods
    rnum(x) { 
        return 1 + Math.floor(Math.random() * x); 
    }
    answer(i) {
        const q = this.state.questions[i];
        return (q.op === '+') ? q.n1 + q.n2 : q.n1 - q.n2;
    }
    numcorrect() { 
        return this.state.questions.reduce( (c, q) => q.correct ? c + 1 : c, 0 )
    }
    numfalse() { 
        return this.props.settings.size - this.state.current - this.numcorrect() - 1;
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
    handleKey = (e) => {
        let id = this.state.current;
        if (id === -1) return; // no more questions
        let questions = this.state.questions;
        let answer = this.answer(id).toString();
        let attempt = questions[id].attempt + e.key;
        
        if (e.key !== '-' && isNaN(e.key)) return; // only negative and numbers permitted

        questions[id].attempt = questions[id].attempt + e.key;

        if (questions[id].attempt === answer) questions[id].correct = true; // Answer is correct
        else for (let i = 0; i < attempt.length; i++) // loop checks if its already wrong or partially correct
            if (questions[id].attempt[i] !== answer[i]) 
                questions[id].correct=false;

        if (questions[id].correct !== null) this.setState({ current: id -1}) // go to next question if right or wrong
        this.setState({ questions: questions}) // update question
    }
    reset = () => {
        this.setState({
            questions: this.initialize(this.props.settings.size),
            current: this.props.settings.size - 1,
            time: 0,
        })
        this.input.current.focus();
    }

    qMargin() {
        let m = { 'marginTop': `${ (this.state.current - 3) * -168}px` }
        if (this.state.current === -1) m = { 'marginTop': `100vh` }
        return m;
    }

    render() {
        return (
            <div className='game-container'>
                <GameButtons 
                    mainMenu={ this.props.mainMenu }
                    restart={ this.reset }
                    true={ this.numcorrect() }
                    false={ this.numfalse() }
                />
                
                <div onKeyDown={ this.handleKey } tabIndex="0" style={ this.qMargin() } ref={this.input} className={`question-container`} >
                    { this.state.questions.map( (q, i) => {
                        return (
                            <Question 
                                key={i} 
                                q={q}
                                current={ this.state.current === i }
                            />
                        )
                    })}
                </div>

                <GameStats 
                    fill={ (this.props.settings.size - this.state.current - 1) / this.props.settings.size * 100 }
                    time={ this.state.time }
                />
            </div>
        )
    }
}