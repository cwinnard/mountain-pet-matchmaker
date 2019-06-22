import { Paper } from '@material-ui/core';
import Check from '@material-ui/icons/CheckCircleOutline';
import React from 'react';


const QuizAnswerOption = ({
    option,
    optionIndex,
    activeSelection,
    makeSelection,
    icon
}) => (
    <Paper
        className="option-paper"
        onClick={makeSelection}
    >
        <div className={`indicator ${activeSelection === optionIndex ? 'selected' : ''}`} />
        <div className="icon-container">
            <img className={`question-icon ${option}`} src={icon} alt={`${option} icon`}/>
        </div>
        <div className="option-text">{option}</div>
        <Check className={`check ${activeSelection === optionIndex ? 'selected' : ''}`} />
    </Paper>
)

export default QuizAnswerOption;
