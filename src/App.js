import './App.css'
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import NewPostContainer from "./components/Main/Profile/NewPostContainer";
import Messenger from "./components/Main/Messenger/Messenger";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from "react";
import UsersContainer from "./components/Main/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <HeaderContainer/>
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <Messenger />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/addpost' render={() => <NewPostContainer/> }/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
