import React, {useEffect, Component} from "react";
import {useParams, withRouter} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import {Container, Divider, Grid, TextField} from "@material-ui/core";
import SvgIcon from '@material-ui/core/SvgIcon';
import {deepOrange} from '@material-ui/core/colors';
import {FormProvider, useForm} from "react-hook-form";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    avatarWrapper: {
        padding: "20px",
        textAlign: "center"
    },
    devider: {
        margin: "20px"
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: "0 auto",
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}))

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    );
}

const TechnicPage = ({activeTechnic, getTechnicInfo}) => {
    useEffect(() => {
        getTechnicInfo(params.id)
    }, [])

    const onSubmit = data => {
        // setFormData(data)
        console.log(data)
        // updateTechnic(technicActive.id, formData)
        // setOpen(false);
    }

    const classes = useStyles();
    const params = useParams();
    const { register, handleSubmit, setValue, reset } = useForm();
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper>
                        <div className={classes.avatarWrapper}>
                            <Avatar
                                className={classes.avatar}
                            ><HomeIcon style={{fontSize: 75}}/>
                            </Avatar>
                            <Divider className={classes.devider}/>
                            <Typography variant={"body2"} component={"span"}>{activeTechnic.type}</Typography>
                            <Typography variant={"h6"} component={"h1"}>{activeTechnic.name}</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("firstName")} defaultValue={activeTechnic.name} />
                            <input {...register("lastName")} defaultValue={activeTechnic.type} />
                            <input type="submit" />
                        </form>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    )
}

export default connect(({ firstName, lastName }) => ({ firstName, lastName }))(TechnicPage);