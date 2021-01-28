import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.posts}/>
        </div>
    )
}
export default Profile