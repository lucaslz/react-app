import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello';
// import Clock from './Clock';
// import Props from './Props';
// import State from './State';
// import ClockCicleComponent from './ClockCicleComponent';
import EventClickOnChange from './EventClickOnChange';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<EventClickOnChange />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
