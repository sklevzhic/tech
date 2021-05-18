import {Route, Switch} from "react-router-dom";
import React from "react";
import Profile from "../../../pages/Profile";
import SignInPage from "../../../pages/SignInPage";
import UsersPage from "../../../pages/UsersPage";

const AppWithRouter = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => <div>MainPage</div>} />
            <Route path='/profile/:uID' render={() =><Profile />} />
            <Route path='/messages' render={() => <div>messages</div>} />
            <Route path='/users/:section' render={() => <UsersPage />} />
            <Route path='/following' render={() => <div>following</div>} />
            <Route path='/signin' render={() => <SignInPage/>}/>
            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
        </Switch>
    )
}

export default AppWithRouter