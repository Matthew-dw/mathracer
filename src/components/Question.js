import React from 'react';
import '../css/question.css'

const Question = (props) => {
    let qSymbols = [props.n1, props.op, props.n2, '=', props.attempt || '?']
    let a = '';
    if (props.current) a = 'active';

    return (
        <div className={`question ${props.correct + ' ' + a}`} >
                {qSymbols.map((s, i) => 
                    <div key={i} className={`question-symbol ${props.correct}`} > { s } </div>
                )}
        </div>
    )
}

export default Question;