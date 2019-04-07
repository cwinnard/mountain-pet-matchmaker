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
    }

    changeActiveQuestion(direction) {
        this.setState(prevState => ({ activeQuestion: prevState.activeQuestion + direction }))
    }

    answerQuestion(key, response) {
        this.setState(prevState => {
            const newState = prevState;
            newState[key] = response;
            newState.activeQuestion = prevState.activeQuestion + 1;
            return newState;
        });
    }

    render() {
        const allQuestions = aboutYouQuestions.concat(aboutDogQuestions);
        return (
            <div className="quiz">
                <div className="questions-container">
                    {allQuestions.map((question, index) => (
                        <QuizQuestion activeQuestion={1} activeWhen={index}>
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
