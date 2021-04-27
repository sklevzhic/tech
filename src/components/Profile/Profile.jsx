import {
    Avatar, Button, Divider,
    Grid,
    Typography
} from "@material-ui/core";
import s from "./Profile.module.scss";
import React, {useEffect, useState} from "react";
import Preloader from "../Preloader";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";

const Profile = ({id, user, getUserInfo}) => {
    useEffect(() => {
        (async () => {
            await getUserInfo(id);
        })();
    }, [getUserInfo, id]);

    let [editMode, setEditMode] = useState(false)

    const toogleMode = () => {
        console.log('a')
        setEditMode(!editMode)
    }

    return (
        <Grid container spacing={3} className={s.profile}>
            {!user ? <Preloader/> : <>
                <Grid item xs={4}>
                    <Avatar
                        className={s.profile__avatar}
                        style={{height: '400px', width: '100%'}}
                        src={user.photos.large}
                        variant="circular"
                    />
                </Grid>
                <Grid
                    className={s.profile__info}
                    item xs>
                    {
                        !editMode &&  <ProfileView user={user} toogleMode={toogleMode}/>
                    }
                    {
                        editMode &&  <ProfileEdit user={user} toogleMode={toogleMode} />
                    }

                </Grid>
            </>}
        </Grid>
    )
}
export default Profile;