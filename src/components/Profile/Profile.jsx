import ProfileInfo from "./ProfileInfo";
import Posts from "./Posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                user={props.user}
                status={props.status}
                updateStatus={props.updateStatus}
                uploadPhoto={props.uploadPhoto}
            />
            <Posts posts={props.posts} />
        </div>
    )
}


export default Profile