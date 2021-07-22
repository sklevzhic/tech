import {withRouter, useParams, Link} from "react-router-dom";
import {
    Avatar,
    Button, Card, CardHeader,
    Container,
    Divider, Fab,
    Grid,
    Icon,
    List,
    ListItem,
    ListItemIcon, ListItemSecondaryAction, ListItemText,
    Paper, TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import DraftsIcon from '@material-ui/icons/Drafts';
import {makeStyles} from "@material-ui/core/styles";
import PrintIcon from '@material-ui/icons/Print';
import Modal from "../../components/Modal";
import {useForm, FormProvider, useFormContext} from "react-hook-form";
import MiniCardTechnic from "../../components/MiniCardTechnic/MiniCardTechnic";
import ListTypes from "../../components/ListTypes";
import {Skeleton} from "@material-ui/lab";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        position: "relative",
        height: "200px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    typeInfoWrapper: {
        display: "flex",
        alignItems: "center"
    },
    imageType: {
        background: "#3f51b5",
        color: "white",
        display: "block",
        width: "60px",
        height: "60px",
        textAlign: "center",
        marginRight: "20px",
    },
    wrapperInfo: {
        marginTop: "50px"
    },
    icon: {
        fontSize: "2.5em",
        paddingTop: "10px"
    },
    button: {
        margin: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    roomItem: {
        marginTop: "20px",
        padding: "7px"
    },
    roomNumber: {}

}));

const TypePage = ({
                      getActiveType,
                      activeType,
                      technics,
                      yearsOfProduction,
                      toogleLoadingInfoFotType
                  }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [technicActive, setTechnicActive] = useState({});
    const [formData, setFormData] = useState({});
    const methods = useForm();
    const handleClickOpen = (el) => {
        setOpen(true);
        setTechnicActive(el)
    };

    const selectIcon = () => {
        console.log('icon')
    }

    const handleClose = () => {
        setOpen(false);
    };

    const params = useParams();
    console.log(params)
    useEffect(() => {
        getActiveType(params.type)
    }, [params])

    const {register, handleSubmit, control, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        setFormData(data)
        // updateTechnic(technicActive.id, formData)
        // setOpen(false);
    }
    return (
        <Container>
            <Grid container className={classes.wrapperInfo} spacing={3}>
                <Grid item xs={3}>

                    <Paper className={classes.paper}>
                        <div className={classes.typeInfoWrapper}>
                            {/*<Avatar>{activeType.name[0].toUpperCase()}</Avatar>*/}
                            <div className={classes.typeInfo}>
                                <Typography color={"primary"}>Тип</Typography>
                                <Typography variant="h6">{activeType.name}</Typography>
                                <Typography variant="body2" gutterBottom>
                                    [ {activeType.type} ]
                                </Typography>
                            </div>
                        </div>
                        <Divider/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography color={"primary"}>Годы выпуска</Typography>
                        <Divider/>
                        <div>
                            {Object.keys(yearsOfProduction).map((key) => {
                                return <Typography variant={"body2"}
                                                   key={key}>{key} - {yearsOfProduction[key].length}</Typography>
                            })}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography color={"primary"}>Корпуса</Typography>
                        {["1", "9"].map((key) => {
                            return <Typography variant={"body2"} key={key}>{key} - 15 шт </Typography>
                        })}
                        <Divider/>
                        <Typography color={"primary"}>Факультеты</Typography>
                        {["1", "9"].map((key) => {
                            return <Typography variant={"body2"} key={key}>{key} - 15 шт </Typography>
                        })}
                    </Paper>
                </Grid>
                {/*<Grid item xs={3}>*/}
                {/*    <Paper className={classes.paper}>*/}
                {/*        <Typography>Материально-ответственные лица</Typography>*/}
                {/*        <Divider/>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        { toogleLoadingInfoFotType ? }
                    </Paper>
                </Grid>

            </Grid>
            {activeType ? <>
            </> : ""}
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    {Object.keys(technics).map(key => {
                        return (
                            <Card key={key} className={classes.roomItem}>
                                <Typography variant={"h5"}
                                            className={`${classes.roomNumber} `}>{technics[key][0].room} кабинет</Typography>
                                <List dense>
                                    {technics[key].map(el => {
                                        return <MiniCardTechnic el={el}/>
                                    })}
                                </List>
                            </Card>
                        )


                    })}</Grid>
                <Grid item xs={4}>
                    <ListTypes/>
                </Grid>
            </Grid>
            <Modal handleClose={handleClose} open={open} title={technicActive.name}>
                <FormProvider>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>

                            <TextField {...register("property")} label={"label"} fullWidth variant="outlined"/>
                            <TextField {...register("property1")} label={"label1"} fullWidth variant="outlined"/>
                            <TextField {...register("property2")} label={"label2"} fullWidth variant="outlined"/>
                        </Grid>
                        <input type="submit"/>

                    </form>
                </FormProvider>
            </Modal>
        </Container>
    )
}

export default withRouter(TypePage)

export const SceletonInfoType = () => {
    return <div>
        <Skeleton variant="text"/>
        <Skeleton variant="rect" width={230} height={180}/>
    </div>
}

