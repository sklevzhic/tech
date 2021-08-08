import App from "./App";
import {connect} from "react-redux";
import {getTypes} from "../../redux/Tech-reducer";


const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {getTypes})(App)