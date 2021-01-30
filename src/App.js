import './App.css'
import Header from './components/Header/Header'
import Profile from "./components/Main/Profile/Profile";
import NewPostContainer from "./components/Main/Profile/NewPostContainer";
import Messenger from "./components/Main/Messenger/Messenger";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from "react";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Switch>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/dialogs' render={() => <Messenger />}/>
                    <Route path='/addpost' render={() => <NewPostContainer/> }/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
