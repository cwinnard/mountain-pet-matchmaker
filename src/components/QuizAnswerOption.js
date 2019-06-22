import { Paper } from '@material-ui/core';
import React from 'react';


const QuizAnswerOption = ({
    option,
    optionIndex,
    activeSelection,
    makeSelection,
    icon
}) => (
    <Paper
        className={`option-paper ${activeSelection === optionIndex ? 'selected' : ''}`}
        onClick={makeSelection}
    >
        <div className="icon-container">
            <img className={`question-icon ${option}`} src={icon} alt={`${option} icon`}/>
        </div>
        <div className="option-text">{option}</div>
    </Paper>
)

export default QuizAnswerOption;
