import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import Matchmaker from './components/Matchmaker';
import './styles/app.css';

import configureStore from './redux/store';

const reduxStore = configureStore();


class App extends Component {
    render() {
        return (
            <ReduxProvider store={reduxStore}>
                <Matchmaker />
            </ReduxProvider>
        );
    }
}

export default App;
