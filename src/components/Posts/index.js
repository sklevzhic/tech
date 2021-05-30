import Posts from './Posts'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps)(Posts)