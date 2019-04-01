import React from 'react';

import PersonIcon from '@material-ui/icons/Person';



const QuizAnswerOption = ({ option, activeSelection, makeSelection, icon }) => (
    <div
        className={`option ${activeSelection === option ? 'selected' : ''}`}
        onClick={makeSelection}
    >
        <div className="icon-container">
            <img className={`question-icon ${option}`} src={icon} />
        </div>
        <div className="option-text">{option}</div>
    </div>
)

export default QuizAnswerOption;
