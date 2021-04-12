import ProfileInfo from "./ProfileInfo";
import Posts from "./Posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo user={props.user} status={props.status} updateStatus={props.updateStatus}/>
            <Posts/>
        </div>
    )
}


export default Profile