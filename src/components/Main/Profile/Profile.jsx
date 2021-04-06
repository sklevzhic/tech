import ProfileInfo from "./ProfileInfo";
import Posts from "./Posts";

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo user={props.user} status={props.status}/>
            <Posts/>
        </div>
    )
}


export default Profile