import {
    Avatar,
    Grid,
} from "@material-ui/core";
import s from "./Profile.module.scss";
import React, {useEffect, useState} from "react";
import Preloader from "../Preloader";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    avatar: {
        cursor: "pointer"
    },
    avatarInput: {
        display: "none"
    }
})

const Profile = ({id, user, getUserInfo, updateUserInfo, isUpdateProfile, uploadPhoto}) => {
    const classes = useStyles()
    useEffect(() => {
        (async () => {
            await getUserInfo(id);
        })();
    }, [getUserInfo, id]);

    let [editMode, setEditMode] = useState(false)

    const toogleMode = () => {
        setEditMode(!editMode)
    }

    const onImageChange = (e) => {
        uploadPhoto(e.target.files[0])
    }

    return (
        <Grid container spacing={3} className={s.profile}>
            {!user ? <Preloader/> : <>
                <Grid item xs={4}>
                    <label htmlFor="contained-button-file">
                        <Avatar
                            className={classes.avatar}
                            style={{height: '300px', width: '300px', margin: '0 auto'}}
                            src={user.photos.large}
                            variant="circular"
                        />
                    </label>
                    <input
                        accept="image/*"
                        onChange={onImageChange}
                        className={classes.avatarInput}
                        id="contained-button-file"
                        multiple
                        name="image"
                        type="file"
                    />
                </Grid>
                <Grid
                    className={s.profile__info}
                    item xs>
                    {
                        isUpdateProfile && <Preloader/>
                    }
                    {
                        !editMode && <ProfileView user={user} toogleMode={toogleMode}/>
                    }
                    {
                        editMode && <ProfileEdit
                            user={user}
                            toogleMode={toogleMode}
                            updateUserInfo={updateUserInfo}
                        />
                    }

                </Grid>
            </>}
        </Grid>
    )
}
export default Profile;