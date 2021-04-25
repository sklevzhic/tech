import {connect} from "react-redux";
import SignInPage from "./SignInPage";
import {buttonActivitySwitch, login} from "../../redux/Auth-reducer";

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
        isButtonActive: state.auth.isButtonActive
    }
}

const mapToDispatch = {
    login,
    buttonActivitySwitch
}

export default connect(mapStateToProps, mapToDispatch)(SignInPage)