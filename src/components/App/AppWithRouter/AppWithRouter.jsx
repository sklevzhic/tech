import {Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import Profile from "../../../pages/Profile";
import SignInPage from "../../../pages/SignInPage";
import UsersPage from "../../../pages/UsersPage";
import TypesPage from "../../../pages/TypesTechnicsPage";
import TypePage from "../../../pages/TypePage";
import TechnicPage from "../../../pages/TechnicPage";
import RoomPage from "../../../pages/RoomPage";
import PrintersPage from "../../../pages/PrintersPage";
import EventsPage from "../../../pages/EventsPage";

const AppWithRouter = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/types'/>}/>
            <Route exact path='/profile' render={() => <Profile/>}/>
            <Route path='/profile/:uID' render={() => <Profile/>}/>
            <Route path='/messages' render={() => <div>messages</div>}/>
            <Route path='/users/:section' render={() => <UsersPage/>}/>
            <Route path='/following' render={() => <div>following</div>}/>
            <Route exact path='/types' render={() => <TypesPage/>}/>
            <Route path='/types/:type' render={() => <TypePage/>}/>
            <Route path='/technics/:id' render={() => <TechnicPage/>}/>
            <Route exact path='/room' render={() => <div>По кабинетам</div>}/>
            <Route path='/room/:room' render={() => <RoomPage/>}/>
            <Route path='/printers' render={() => <PrintersPage/>}/>
            <Route path='/events' render={() => <EventsPage/>}/>
            <Route path='/signin' render={() => <SignInPage/>}/>
            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    )
}

export default AppWithRouter