import { Stepper, Step, StepLabel } from '@material-ui/core';
import React, { Component } from 'react';

import QuizAnswerOption from './QuizAnswerOption';
import QuizQuestion from './QuizQuestion';

import { aboutYouQuestions, aboutDogQuestions } from '../data/questionsData';

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        livingSituation: '',
        kidsAndPets: '',
        activityLevel: '',
        dogAge: '',
        dogSize: '',
        commitment: '',
    };

    changeActiveQuestion(direction) {
        this.setState(prevState => ({ activeQuestion: prevState.activeQuestion + direction }));
    };

    answerQuestion(key, response) {
        this.setState(prevState => {
            const newState = prevState;
            newState[key] = response;
            newState.activeQuestion = prevState.activeQuestion + 1;
            this.scroll(newState.activeQuestion);
            return newState;
        });
    };

    scroll(activeQuestion) {
        const containerEl = document.getElementById('scroll-container');
        const activeEl = document.getElementById(`question-${activeQuestion}`);
        if (activeEl) {
            setTimeout(function () {
                containerEl.scrollTop = activeEl.offsetTop;
            }, 200);
        }
    };

    render() {
        const allQuestions = aboutYouQuestions.concat(aboutDogQuestions);
        return (
            <div className="quiz">
                <div className="questions-container">
                    <div id="scroll-container" className="scroll-container">
                        {allQuestions.map((question, index) => (
                            <QuizQuestion activeQuestion={this.state.activeQuestion} activeWhen={index}>
                                <div className={`question ${question.key}`} key={question.key}>
                                    <div className="text">
                                        {question.text}
                                    </div>
                                    <div className="options-container">
                                        {question.options.map((option) => (
                                            <QuizAnswerOption
                                                key={`${question.key}-${option.text}`}
                                                option={option.text}
                                                activeSelection={this.state[question.key]}
                                                makeSelection={() => { this.answerQuestion(question.key, option.text) }}
                                                icon={option.icon || ''}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </QuizQuestion>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;
