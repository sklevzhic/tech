import './App.css'
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import NewPostContainer from "./components/Main/Profile/NewPostContainer";
import Messenger from "./components/Main/Messenger/Messenger";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from "react";
import UsersContainer from "./components/Main/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Main/Auth/LoginContainer";
import {connect} from "react-redux";
import {initialize} from "./redux/App-reducer";
import {compose} from "redux";
import { withRouter } from 'react-router-dom';
import Preloader from "./components/Common/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }
    render() {
        if (!this.props.initializeApp) {
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className="container">
                    <HeaderContainer/>
                    <Switch>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <Messenger/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/addpost' render={() => <NewPostContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initializeApp: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initialize}))
    (App);
