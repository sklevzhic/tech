import {
    Avatar, Button,
    Grid,
} from "@material-ui/core";
import s from "./Profile.module.scss";
import React, {useEffect, useState} from "react";
import Preloader from "../Preloader";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";
import { makeStyles } from "@material-ui/styles";
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles({
    avatar: {
        "&:hover": {
            opacity: "0.6"
        },
        cursor: "pointer"
    },
    avatarInput: {
        display: "none"
    },
    label: {
        background: "red"
    }

})

const Profile = ({user, id, getUserInfo, updateUserInfo, isUpdateProfile, uploadPhoto, match}) => {
    const classes = useStyles();

    // Считывание URL
    let userIdURL = match.params.uID;
    // если undefined , то присваиваем id авторизованного
    if (!userIdURL) {
        userIdURL = id
    }

    // переключение режима профайла (простмотр/редактирование)
    let [editMode, setEditMode] = useState(false)
    const toogleMode = () => {
        setEditMode(!editMode)
    }

    // проверка владельца
    const checkIsOwner = () => {
        if (userIdURL === id) {
            return true
        }
    }

    let [userId, setUserId] = useState(userIdURL)
    useEffect(() => {
        getUserInfo(userId)
    }, [getUserInfo, userId,userIdURL]);

    // обновление картинки профиля
    const onImageChange = (e) => {
        uploadPhoto(e.target.files[0])
    }

    return (
        <Grid container spacing={3} className={s.profile}>
            {!user
                ? <Preloader/>
                : <>
                    <Grid item xs={4}>
                        <label className={classes.label}  htmlFor="contained-button-file">
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
                        {checkIsOwner() &&
                        <Button
                            onClick={toogleMode}
                            variant="outlined"
                            className={s.profile__edit}
                        >
                            {editMode
                                ? 'Назад'
                                : 'Редактировать профиль'
                            }

                        </Button> }
                        {
                            isUpdateProfile && <Preloader/>
                        }
                        {
                            !editMode && <ProfileView user={user}/>
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
export default withRouter(Profile);