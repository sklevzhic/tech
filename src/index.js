import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state1";

const  reRender = (state) => {
    console.log('state = ',state)
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState());
store.subscribe(reRender)
reportWebVitals();
