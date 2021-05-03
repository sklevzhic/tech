import App from "./App";
import {connect} from "react-redux";
import { initialize} from "../../redux/App-reducer";

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initialize})(App)