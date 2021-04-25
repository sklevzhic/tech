import Header from './Header'
import {connect} from "react-redux";
import {logout} from "../../redux/Auth-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps,{ logout })(Header)