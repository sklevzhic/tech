import {Route, Switch} from "react-router-dom";
import React from "react";

const AppWithRouter = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => <div>MainPage</div>} />
            <Route path='/profile' render={() => <div>Profile</div>} />
            <Route path='/messages' render={() => <div>messages</div>} />
            <Route path='/users' render={() => <div>Users</div>} />
            {/*<Route path='*' render={() => <div>404 NOT FOUND</div>} />*/}
        </Switch>
    )
}

export default AppWithRouter