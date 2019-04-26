import React from 'react';
import '../css/question.css'

const Question = (props) => {
    let qSymbols = [props.q.n1, props.q.op, props.q.n2, '=', props.q.attempt || '?']
    let a = '';
    if (props.q.current) a = 'active';

    return (
        <div className={`question ${props.correct + ' ' + a}`} >
                {qSymbols.map((s, i) => 
                    <div key={i} className={`question-symbol ${props.q.correct}`} > { s } </div>
                )}
        </div>
    )
}

export default Question;