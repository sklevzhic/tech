import './App.css'
import NewPostContainer from "./components/Profile1/NewPostContainer";
import Messenger from "./components/Messenger/Messenger";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Auth/LoginContainer";
import {connect} from "react-redux";
import {initialize} from "./redux/App-reducer";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';
import Preloader from "./components/Common/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {Redirect} from "react-router-dom"


const ProfileContainer = React.lazy(() => import('./components/Profile1/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    // catchAllUnhandledErrors = (promiseRejectionEvent) => {
    //     console.log(promiseRejectionEvent.reason.message)
    // }

    componentDidMount() {
        this.props.initialize()
        // window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                        <Route exact path='/' render={()=><Redirect to={"/profile"} />}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={() => <Messenger/>}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/addpost' render={() => <NewPostContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                        <Route path='*' render={() => <h1>404 not found</h1>}/>
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
