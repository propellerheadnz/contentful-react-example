import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import config from './config';
import ReactGA from 'react-ga';

ReactGA.initialize(config.ga.code);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
