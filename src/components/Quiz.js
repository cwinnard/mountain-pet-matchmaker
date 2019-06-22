import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuizAnswerOption from './QuizAnswerOption';
import QuizQuestion from './QuizQuestion';

import MatchmakerClient from '../clients/matchmakerClient';
import { aboutYouQuestions, aboutDogQuestions } from '../data/questionsData';
import ACTIONS from '../redux/action';


class Quiz extends Component {
    state = {
        activeQuestion: 1,
        livingSituation: null,
        kidsAndPets: null,
        activityLevel: null,
        dogAge: null,
        dogSize: null,
        commitment: null,
    };

    changeActiveQuestion(direction) {
        this.setState(prevState => ({ activeQuestion: prevState.activeQuestion + direction }));
    };

    answerQuestion(key, response) {
        if (key === 'kidsAndPets') {
            this.setState(prevState => {
                const newState = prevState;
                const prevAnswer = prevState.kidsAndPets;
                console.log(response);
                console.log(prevAnswer);
                if ((response === 0 && prevAnswer === 1) || (response === 1 && prevAnswer === 0)) {
                    newState.kidsAndPets = 2;
                } else if (response === 3) {
                    newState.kidsAndPets = 3;
                } else {
                    newState.kidsAndPets = response;
                }
                return newState;
            });
        } else {
            this.setState(prevState => {
                const newState = prevState;
                newState[key] = response;
                newState.activeQuestion = prevState.activeQuestion + 1;
                // this.scroll(newState.activeQuestion);
                return newState;
            });
        }
    };

    // scroll(activeQuestion) {
    //     const containerEl = document.getElementById('scroll-container');
    //     const activeEl = document.getElementById(`scroll-item ${activeQuestion - 1}`);
    //     if (activeEl) {
    //         setTimeout(function () {
    //             containerEl.scrollTop = activeEl.offsetTop + 25;
    //         }, 200);
    //     }
    // };

    getMatches() {
        const stateObj = this.state;
        return new Promise(function(resolve, reject) {
            const matchmakerClient = new MatchmakerClient();
            const answersArray = Object.keys(stateObj).map((key) => { return stateObj[key]; });
            // Remove state attribute representing active quiz question
            answersArray.shift();
            matchmakerClient.getMatches(answersArray).then((matches) => {
                resolve(matches);
            });
        });
    }

    render() {
        const allQuestions = aboutYouQuestions.concat(aboutDogQuestions);
        const { setMatches } = this.props;
        console.log(this.state);
        return (
            <div className="quiz">
                <div className="questions-container">
                    <div id="scroll-container" className="scroll-container">
                        {allQuestions.map((question, index) => (
                            <div id={`scroll-item ${index + 1}`} className="scroll-item"  key={question.key}>
                                <QuizQuestion activeQuestion={this.state.activeQuestion} activeWhen={index + 1}>
                                    <div className={`question ${question.key}`}>
                                        <div className="question-number">
                                            {index + 1}
                                        </div>
                                        <div className="question-text">
                                            {question.text}
                                        </div>
                                        <div className="options-container">
                                            {question.options.map((option, index) => (
                                                <QuizAnswerOption
                                                    key={`${question.key}-${option.text}`}
                                                    option={option.text}
                                                    optionIndex={index}
                                                    activeSelection={this.state[question.key]}
                                                    makeSelection={() => { this.answerQuestion(question.key, index) }}
                                                    icon={option.icon || ''}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </QuizQuestion>
                            </div>
                        ))}
                    </div>
                    <div className="submit-container">
                        <button type="button" className="submit-button" onClick={() => { this.getMatches().then((matches) => { setMatches(matches) }); }}>
                            Get match
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setMatches: setMatches => dispatch(ACTIONS.setMatches(setMatches)),
});

export default connect(null, mapDispatchToProps)(Quiz);
