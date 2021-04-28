import {
    Avatar, Button,
    Grid,
} from "@material-ui/core";
import s from "./Profile.module.scss";
import React, {useEffect, useState} from "react";
import Preloader from "../Preloader";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import {PhotoCamera} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
}));


const Profile = ({id, user, getUserInfo, updateUserInfo, isUpdateProfile}) => {
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

    return (
        <Grid container spacing={3} className={s.profile}>
            {!user ? <Preloader/> : <>
                <Grid item xs={4}>
                        <Avatar

                            className={s.profile__avatar}
                            style={{height: '300px', width: '300px', margin: '0 auto'}}
                            src={user.photos.large}
                            variant="circular"
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