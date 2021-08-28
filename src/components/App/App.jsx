import Header from "../Header";
import {Switch} from "react-router-dom";
import AppWithRouter from "./AppWithRouter";
import Authorization from "./Authorization";

const App = ({isAuth}) => {
    return (
        <>
            <Header/>
            <Switch>
                {!isAuth ? <AppWithRouter/> : <Authorization/>}
            </Switch>
        </>
    )

}

export default App
