import React, {useEffect} from "react";
import Header from "../Header";
import {Switch} from "react-router-dom";
import AppWithRouter from "./AppWithRouter";
import Authorization from "./Authorization";
import Preloader from "../Preloader";

const App = ({isAuth, initialize, getTypes, initialized}) => {
    // useEffect(() => {
    //     initialize()
    // },[initialize]);
    useEffect(() => {
        getTypes()
    },[]);
    return (
        <>
            {
                !initialized ? <Preloader />
                : <>
                    <Header/>

                        <Switch>
                            {!isAuth ? <AppWithRouter/> : <Authorization/>}

                        </Switch>
                </>
            }


        </>
    )

}

export default App
