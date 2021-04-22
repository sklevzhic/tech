import './App.css'
import NewPostContainer from "./components/Profile/NewPostContainer";
import Messenger from "./components/Messenger/Messenger";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React, { Suspense } from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Auth/LoginContainer";
import {connect} from "react-redux";
import {initialize} from "./redux/App-reducer";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';
import Preloader from "./components/Common/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initializeApp) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="container">
                    <HeaderContainer/>
                    <Switch>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={() => <Messenger/>}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
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
