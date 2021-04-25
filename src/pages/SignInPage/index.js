import SignInPage from "./SignInPage";
import {connect} from "react-redux";
import {buttonActivitySwitch, login} from "../../redux/Auth-reducer";

const mapStateToProps = (state) => {
    console.log(state.auth)
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

const mapToDispatch = {
    login,
    buttonActivitySwitch
}

export default connect(mapStateToProps, mapToDispatch)(SignInPage)
