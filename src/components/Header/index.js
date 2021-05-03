import Header from './Header'
import {connect} from "react-redux";
import {logout} from "../../redux/Auth-reducer";

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        photo: state.auth.photos,

    }
}
export default connect(mapStateToProps,{ logout })(Header)