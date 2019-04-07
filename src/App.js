import { AppBar, Card, CardContent, CardMedia } from '@material-ui/core';
import React, { Component } from 'react';
import './styles/app.css';

import Quiz from './components/Quiz';

import getDogInfo from './data/informationGatherer';
import json from './data/mpr-dogs-3-13.json';

class App extends Component {
    state = {
        phase: 0,
    };

    render() {
        const dogInfo = getDogInfo(json);
        return (
            <div className="app">
                <AppBar position='absolute' style={{height: '50px'}}/>
                <div className="app-container">
                    {this.state.phase === 0 && <Quiz />}
                    {this.state.phase > 0 &&
                        dogInfo.map((info) => (
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
        );
    }
}

export default App;
