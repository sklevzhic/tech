import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state1";

const  reRender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dispatch={store.dispatch}
                newPost={store.getState().profilePage.newPostText}
                posts={store.getState().profilePage.posts}
                dialogs={store.getState().dialogsPage.dialogs}
                messages={store.getState().dialogsPage.messages}
                newMessageText={store.getState().dialogsPage.newMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState());
store.subscribe(reRender)
reportWebVitals();
