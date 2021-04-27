import ProfileInfo from "./ProfileInfo";
import Posts from "./Posts";
import React from "react";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                user={props.user}
                status={props.status}
                updateStatus={props.updateStatus}
                uploadPhoto={props.uploadPhoto}
                updateUserInfo={props.updateUserInfo}

            />
            <Posts posts={props.posts} />
        </div>
    )
}


export default Profile