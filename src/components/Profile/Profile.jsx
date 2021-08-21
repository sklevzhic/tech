import {
    Avatar, Divider,
    Grid, Paper, Typography,
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {withRouter} from 'react-router-dom';
import klevzhits from '../../assets/img/technics/klevzhits.jpg'
import Title from "../Title";


const useStyles = makeStyles((theme) => ({
    name: {
        padding: "20px"
    },
    avatar: {
        margin: '0 auto',
    },
    avatarInput: {
        display: "none"
    },
    label: {
        background: "red"
    }

}))

const Profile = ({user}) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <>
                <Grid item xs={4}>
                    <Avatar
                        className={classes.avatar}
                        src={klevzhits}
                        variant="circular"
                    />
                    <Typography>
                        {
                            Object.keys(user.socialLinks).map(key => {
                                return <a href={user.socialLinks[key]}>{key}</a>
                            })
                        }
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h5" component="h3" className={classes.name}>{user.name}</Typography>
                    <Divider/>
                    <Title text="О себе"></Title>
                    <Typography>{user.aboutMe}</Typography>
                    <Divider/>

                    <Title text="Контакты"></Title>
                    <Typography>{user.phone}</Typography>
                    <Typography>{user.email}</Typography>
                    <Divider/>

                    <Title text="Опыт работы"></Title>
                    <Typography>{user.workExperience.map(el => {
                        return <Typography>{el.company}</Typography>
                    })
                    }</Typography>
                    <Divider/>

                    <Title text="Образование"></Title>
                    <Typography>{user.education.map(el => {
                        return <Typography>{el.company}</Typography>
                    })
                    }</Typography>
                </Grid>
            </>
        </Grid>
    )
}
export default withRouter(Profile);