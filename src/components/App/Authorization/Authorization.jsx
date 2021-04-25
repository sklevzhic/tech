import {Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import SignInPage from "../../../pages/SignInPage";

const Authorization = () => {
    return (
        <Switch>
        <Route path='/signin' render={() => <SignInPage/>}/>
        <Redirect to={"/signin"}/>
        </Switch>
    )
}

export default Authorization