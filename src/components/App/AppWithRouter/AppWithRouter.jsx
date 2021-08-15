import {Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import Profile from "../../../pages/Profile";
import SignInPage from "../../../pages/SignInPage";
import UsersPage from "../../../pages/UsersPage";
import TypesPage from "../../../pages/TypesTechnicsPage";
import TypePage from "../../../pages/TypePage";
import TechnicPage from "../../../pages/TechnicPage";
import RoomPage from "../../../pages/RoomPage";

const AppWithRouter = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
            <Route exact path='/profile' render={() => <Profile/>}/>
            <Route path='/profile/:uID' render={() => <Profile/>}/>
            <Route path='/messages' render={() => <div>messages</div>}/>
            <Route exact path='/users' render={() => <Redirect to='/users/allusers'/>}/>
            <Route path='/users/:section' render={() => <UsersPage/>}/>
            <Route path='/following' render={() => <div>following</div>}/>
            <Route exact path='/types' render={() => <TypesPage/>}/>
            <Route path='/types/:type' render={() => <TypePage/>}/>
            <Route path='/technics/:id' render={() => <TechnicPage/>}/>
            <Route path='/room/:room' render={() => <RoomPage/>}/>
            <Route path='/signin' render={() => <SignInPage/>}/>
            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    )
}

export default AppWithRouter