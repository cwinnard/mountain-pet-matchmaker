import React from 'react';


const QuizAnswerOption = ({ option, activeSelection, makeSelection, icon }) => (
    <div
        className={`option ${activeSelection === option ? 'selected' : ''}`}
        onClick={makeSelection}
    >
        <div className="icon-container">
            <img className={`question-icon ${option}`} src={icon} alt={`${option} icon`}/>
        </div>
        <div className="option-text">{option}</div>
    </div>
)

export default QuizAnswerOption;
