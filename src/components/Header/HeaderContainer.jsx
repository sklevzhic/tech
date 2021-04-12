import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {logaut} from "../../redux/Auth-reducer";

class AuthWrapper extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        id: state.auth.id,
        email: state.auth.email
    }
}

let HeaderContainer = connect(mapStateToProps, {
    logaut
})(AuthWrapper)



export default HeaderContainer