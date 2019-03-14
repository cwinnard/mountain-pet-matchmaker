import React from 'react';

import PersonIcon from '@material-ui/icons/Person';

const QuizAnswerOption = ({ option, activeSelection, makeSelection }) => (
    <div
        className={`option ${activeSelection === option ? 'selected' : ''}`}
        onClick={makeSelection}
    >
        <div className="icon-container">
            <PersonIcon fontSize="large" />
        </div>
        <div className="option-text">{option}</div>
    </div>
)

export default QuizAnswerOption;
