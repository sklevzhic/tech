import React from 'react';
import Login from "./Login";
import {compose} from "redux";
import {login} from "../../redux/Auth-reducer";
import {connect} from "react-redux";

class LoginContainer extends React.Component {
    render() {
        return        <Login login={this.props.login}/>
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
export default compose(
    connect(mapStateToProps, {login}))
    (LoginContainer);