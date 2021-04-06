import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/Auth-reducer";

class AuthWrapper extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

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
    getAuthUserData
})(AuthWrapper)



export default HeaderContainer