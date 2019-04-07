import React from 'react';


const determineStatusClassName = (activeQuestion, activeWhen) => {
    let statusClassName;
    if (activeQuestion < activeWhen) {
        statusClassName = 'hidden';
    } else if (activeQuestion === activeWhen) {
        statusClassName = 'active';
    } else {
        statusClassName = 'scroll-past';
    };
    return statusClassName;
};

const QuizQuestion = ({ activeQuestion, activeWhen, children }) => {
    const statusClassName = determineStatusClassName(activeQuestion, activeWhen);
    return (
        <div id={`question-${activeWhen}`} className={`quiz-question ${statusClassName}`}>
            {children}
        </div>
    )
}

export default QuizQuestion;
