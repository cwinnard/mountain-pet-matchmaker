import { Card, CardContent, CardMedia } from '@material-ui/core';
import React, { Component } from 'react';
import './app.css';

import Quiz from './Quiz';

import getDogInfo from './informationGatherer';
import json from './data/mpr-dogs-3-13.json';

class App extends Component {
    render() {
        const dogInfo = getDogInfo(json);
        return (
            <div className="App">
                <Quiz />
                {dogInfo.map((info) => (
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
                ))}
            </div>
        );
    }
}

export default App;
