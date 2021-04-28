import s from "./Profile.module.scss";
import {Button, Divider, Grid, Typography} from "@material-ui/core";
import Status from "../Status";
import FollowList from "../FollowList";
import SocialLink from "../SocialLink";
import React from "react";

const ProfileView = ({user, toogleMode}) => {
    return (
        <>
            <div className={s.profile__namewrapper}>
                <Typography variant="h5" component="h3"
                            className={s.profile__name}>{user.fullName} </Typography>
                <Button onClick={toogleMode} variant="outlined" className={s.profile__edit}>Редактировать
                    профиль</Button>
            </div>
            <Status/>
            <div className={`inline center ${s.profile__buttons}`}>
                <FollowList/>
            </div>
            <Typography
                variant="body1"
                component="p"
                gutterBottom
            >{user.aboutMe} </Typography>
            <Divider/>
            <Grid>
                <Typography
                    variant="h6"
                    component="p"
                    gutterBottom
                >Контакты: </Typography>
                <SocialLink contacts={user.contacts}/>
            </Grid>
            <Divider/>
            <Typography
                variant="body1"
                component="p"
                gutterBottom
            >Поиск работы: {user.lookingForAJob ? "Да" : "Нет"}</Typography>
            {user.lookingForAJob && <Typography
                variant="body2"
                component="p"
                gutterBottom
            >{user.lookingForAJobDescription}
            </Typography>
            }
        </>
    )
}

export default ProfileView
