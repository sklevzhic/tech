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
import LastRefuelingPage from "../../../pages/LastRefuelingPage";


const AppWithRouter = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/technics'/>}/>
            <Route exact path='/profile' render={() => <Profile/>}/>
            <Route path='/profile/:uID' render={() => <Profile/>}/>
            <Route exact path='/technics' render={() => <TypePage/>}/>
            <Route path='/technics/:id' render={() => <TechnicPage/>}/>
            <Route exact path='/room' render={() => <div>По кабинетам</div>}/>
            <Route path='/room/:room' render={() => <RoomPage/>}/>
            <Route exact path='/printers' render={() => <PrintersPage/>}/>
            <Route exact path='/printers/lastrefueling' render={() => <LastRefuelingPage />}/>
            <Route path='/events' render={() => <EventsPage/>}/>
            <Route path='/signin' render={() => <SignInPage/>}/>
            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    )
}

export default AppWithRouter