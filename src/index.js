import React from 'react';
import  './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./redux/redux-store";
import {Provider} from 'react-redux'
import {HashRouter} from "react-router-dom";

    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App className=""/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    )


reportWebVitals();
