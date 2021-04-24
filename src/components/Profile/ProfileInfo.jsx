import userPhoto from '../../assets/img/admin.jpg'
import ProfileContent from "./ProfileContent";
import EditProfileContent from "./EditProfileContent";
import React, {useState} from "react";

const ProfileInfo = (props) => {
    const onMainPhotoSelectd = (e) => {
        props.uploadPhoto(e.target.files[0])
    }
    let [editMode, setEditMode] = useState(false);


    return (
        <div className="row">
            {
                (props.user === '')
                    ? <p>Загрузка</p>
                    : <div>
                        <div className="col s4">
                            <img src={props.user.photos.large || userPhoto} alt="2"/>
                            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelectd}/>}
                        </div>
                        <div className="col s8">
                            {props.isOwner && <button onClick={() => setEditMode(true)}>Редактировать</button>}

                            {editMode ? <EditProfileContent {...props} updateUserInfo={props.updateUserInfo} setEditMode={setEditMode}/> : <ProfileContent {...props} />}

                        </div>
                    </div>
            }


        </div>
    )
}


export default ProfileInfo