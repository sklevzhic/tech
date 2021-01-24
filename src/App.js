import './App.css'
import Header from './components/Header/Header'

import Profile from "./components/Main/Profile/Profile";
import NewPost from "./components/Main/Profile/NewPost";
import Messenger from "./components/Main/Messenger/Messenger";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import store from "./redux/state1";
import React from "react";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Switch>
                    <Route
                        path='/profile'
                        render={() =>
                            <Profile
                                posts={props.posts}
                            />}/>
                    <Route
                        path='/dialogs'
                        render={() =>
                            <Messenger
                                dispatch={store.dispatch}
                                dialogs={props.dialogs}
                                messages={props.messages}
                                newMessageText={props.newMessageText}
                            />}/>
                    <Route
                        path='/addpost'
                        render={() =>
                            <NewPost
                                newPost={props.newPostText}
                                dispatch={props.dispatch}
                            />
                        }
                        />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
