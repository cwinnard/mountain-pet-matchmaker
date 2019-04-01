import { Stepper, Step, StepLabel } from '@material-ui/core';
import React, { Component } from 'react';

import QuizAnswerOption from './QuizAnswerOption';

import { aboutYouQuestions, aboutDogQuestions } from './data/questionsData';

class Quiz extends Component {
    state = {
        activeQuestion: 1,
        livingSituation: '',
        kidsAndPets: '',
        activityLevel: '',
        dogAge: '',
        dogSize: '',
        commitment: '',
    }

    changeActiveQuestion(direction) {
        this.setState(prevState => ({ activeQuestion: prevState.activeQuestion + direction }))
    }

    answerQuestion(key, response) {
        const newState = { ...this.state };
        newState[key] = response;
        this.setState(newState);
    }

    render() {
        return (
            <div className="quiz">
                <div className="questions-container">
                    <div className="about-you">
                        {this.state.activeQuestion >= 1 && aboutYouQuestions.map((question) => (
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
                        ))}
                    </div>
                    <div className="about-dog">
                        {this.state.activeQuestion === 2 && aboutDogQuestions.map((question) => (
                            <div className={`question ${question.text}`}>
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
                        ))}
                    </div>
                </div>
                <div className="buttons-container">
                    <button onClick={() => { this.changeActiveQuestion(-1) }}>back</button>
                    <button onClick={() => { this.changeActiveQuestion(1) }}>next</button>
                </div>
                <Stepper activeStep={this.state.activeQuestion - 1}>
                    <Step>
                        <StepLabel>About You</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>About Dog</StepLabel>
                    </Step>
                </Stepper>
            </div>
        )
    }
}

export default Quiz;
