import { AppBar, Card, CardContent, CardMedia } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Quiz from './Quiz';


class Matchmaker extends Component {
    render() {
        const { phase, matches } = this.props;
        return (
            <div className="app">
                <AppBar position='absolute' style={{height: '50px'}}/>
                <div className="app-container">
                    {phase === 0 && <Quiz />}
                    {phase > 0 &&
                        matches.map((match) => (
                            <Card className="dog-card" key={match.id}>
                            <CardMedia
                                component="img"
                                alt="dog pic"
                                className="dog-image"
                                image={match.photos[0].medium}
                            />
                                <CardContent>
                                    <div>{match.matchScore}</div>
                                    <div>{match.name}</div>
                                    <div>{match.breeds.primary}</div>
                                    <div>{match.description}</div>
                                    <div>{match.age}</div>
                                    <div>{match.gender}</div>
                                    <div>{match.size}</div>
                                </CardContent>
                            </Card>
                        ))

                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    phase: state.phase,
    matches: state.matches,
});

export default connect(mapStateToProps, null)(Matchmaker);
