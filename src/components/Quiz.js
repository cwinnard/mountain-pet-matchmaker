import { Stepper, Step, StepLabel } from '@material-ui/core';
import React, { Component } from 'react';

import QuizAnswerOption from './QuizAnswerOption';
import QuizQuestion from './QuizQuestion';

import { aboutYouQuestions, aboutDogQuestions } from '../data/questionsData';

class Quiz extends Component {
    state = {
        activeQuestion: 1,
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
        const activeEl = document.getElementById(`scroll-item ${activeQuestion - 1}`);
        if (activeEl) {
            setTimeout(function () {
                containerEl.scrollTop = activeEl.offsetTop + 25;
            }, 200);
        }
    };

    render() {
        const allQuestions = aboutYouQuestions.concat(aboutDogQuestions);
        return (
            <div className="quiz">
                <div className="questions-container">
                    <div id="scroll-container" className="scroll-container">
                        <div id="scroll-item 0" className="scroll-item quiz-questions-title">
                            Meet your match!
                        </div>
                        {allQuestions.map((question, index) => (
                            <div id={`scroll-item ${index + 1}`} className="scroll-item">
                                <QuizQuestion activeQuestion={this.state.activeQuestion} activeWhen={index + 1}>
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
                            </div>
                        ))}
                        <div className="bottom-spacer" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;
