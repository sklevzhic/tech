import React, {useEffect} from "react";
import Header from "../Header";
import {Redirect, Route, Switch} from "react-router-dom";
import AppWithRouter from "./AppWithRouter";
import Authorization from "./Authorization";

const App = ({isAuth, initialize}) => {
    useEffect(() => {
        initialize()
    });
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                {isAuth ? <AppWithRouter/> : <Authorization/>}
            </Switch>


        </>
    );
}

export default App
