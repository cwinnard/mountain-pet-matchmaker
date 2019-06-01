import { AppBar, Card, CardContent, CardMedia } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Quiz from './Quiz';


class Matchmaker extends Component {
    render() {
        const { phase, matches } = this.props;
        console.log(this.props);
        return (
            <div className="app">
                <AppBar position='absolute' style={{height: '50px'}}/>
                <div className="app-container">
                    {phase === 0 && <Quiz />}
                    {phase > 0 &&
                        matches.map((info) => (
                            <Card className="dog-card" key={info.id}>
                            <CardMedia
                                component="img"
                                alt="dog pic"
                                className="dog-image"
                                image={info.photos[0].medium}
                            />
                                <CardContent>
                                    <div>{info.id}</div>
                                    <div>{info.name}</div>
                                    <div>{info.breeds.primary}</div>
                                    <div>{info.description}</div>
                                    <div>{info.age}</div>
                                    <div>{info.gender}</div>
                                    <div>{info.size}</div>
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
