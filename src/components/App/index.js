import App from "./App";
import {connect} from "react-redux";
import { initialize} from "../../redux/App-reducer";

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {initialize})(App)