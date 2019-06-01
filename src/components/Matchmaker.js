import { AppBar } from '@material-ui/core';
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
                        <div>hello 2</div>
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
