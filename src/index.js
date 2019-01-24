import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './css/reset.css'
import './css/fonts.css'
// import './css/hamburgers.css'
// import * as serviceWorker from './serviceWorker';

const store = configureStore();
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
