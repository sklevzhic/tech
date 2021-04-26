import {
    Avatar, Button, Divider,
    Grid,
    Typography
} from "@material-ui/core";
import s from "./ProfileInfo.module.scss";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import Status from "../Status";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import Preloader from "../Preloader";

const Profile = ({id, user, getUserInfo}) => {
    useEffect(() => {
        getUserInfo(id)
    }, []);
    return (
        <Grid container spacing={3} className={s.profile}>
            { !user ? <Preloader /> : <>
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
                    <div
                        className={s.profile__namewrapper}
                    >
                        <Typography
                            variant="h5"
                            component="h3"
                            className={s.profile__name}
                        >{user.fullName} </Typography>
                        <Button
                            variant="outlined"
                            className={s.profile__edit}
                        >Редактировать профиль</Button>
                    </div>

                    <Status/>

                    <div className={`inline center ${s.profile__buttons}`}>

                        <Link
                            to={"/online"}>
                            <Button
                                variant="outlined"
                                href="#text-buttons"
                                color="primary"
                            >
                                <span>25 </span> Online
                            </Button>
                        </Link>

                        {/*<Button*/}
                        {/*    variant="outlined"*/}
                        {/*    href="#text-buttons"*/}
                        {/*    color="primary"*/}
                        {/*>*/}
                        {/*    <Link to={"/online"}>*/}

                        {/*        <span>25 </span> Followers*/}
                        {/*    </Link>*/}

                        {/*</Button>*/}
                        {/*<Button*/}
                        {/*    variant="outlined"*/}
                        {/*    href="#text-buttons"*/}
                        {/*    color="primary"*/}
                        {/*>*/}
                        {/*    <Link to={"/online"}>*/}
                        {/*        <span>25 </span> Following*/}
                        {/*    </Link>*/}

                        {/*</Button>*/}
                    </div>


                    <Typography
                        variant="h6"
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
                        <IconButton
                            aria-label="delete"
                            color="primary"
                        >
                            <TwitterIcon/>
                        </IconButton>
                        <IconButton
                            aria-label="delete"
                            color="primary"
                        >
                            <FacebookIcon/>
                        </IconButton>
                        <IconButton
                            aria-label="delete"
                            color="primary">
                            <TelegramIcon/>
                        </IconButton>
                        <IconButton aria-label="delete"
                                    color="primary">
                            <GitHubIcon/>
                        </IconButton>
                    </Grid>
                    <Divider/>
                    <Typography
                        variant="body1"
                        component="p"
                        gutterBottom
                    >Поиск работы: {user.lookingForAJob}</Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        gutterBottom
                    >{user.lookingForAJobDescription}
                    </Typography>

                </Grid>
            </>}
        </Grid>
    )
}
export default Profile