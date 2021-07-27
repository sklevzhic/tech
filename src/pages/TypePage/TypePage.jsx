import {withRouter, useParams} from "react-router-dom";
import {
    Card,
    Container,
    Divider,
    Grid,
    List,
    Paper
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "../../components/Modal";
import MiniCardTechnic from "../../components/MiniCardTechnic";
import ListTypes from "../../components/ListTypes";
import {Skeleton} from "@material-ui/lab";
import MiniCardTechnicSkeleton from "../../components/MiniCardTechnic/MiniCardTechnicSceleton";


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
                      toogleLoadingInfoFotType,
                      matfyos,
                      korpuses
                  }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [technicActive, setTechnicActive] = useState({});
    // const handleClickOpen = (el) => {
    //     setOpen(true);
    //     setTechnicActive(el)
    // };

    // const selectIcon = () => {
    //     console.log('icon')
    // }

    const handleClose = () => {
        setOpen(false);
    };

    const params = useParams();
    useEffect(() => {
        getActiveType(params.type)
    }, [params])

    return (
        <Container>
            <Grid container className={classes.wrapperInfo} spacing={3}>
                <Grid item xs={3}>

                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <div className={classes.typeInfoWrapper}>
                                <div className={classes.typeInfo}>
                                    <Typography color={"primary"}>Тип</Typography>
                                    <Typography variant="h6">{activeType.name}</Typography>
                                    <Typography variant="body2" gutterBottom>
                                        [ {activeType.type} ]
                                    </Typography>
                                </div>
                            </div>
                            <Divider/>
                        </>
                        }
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <Typography color={"primary"}>Годы выпуска</Typography>
                            <Divider/>
                            <div>
                                {
                                    yearsOfProduction.map(el => {
                                        return <Typography variant={"body2"}
                                                           key={el.year}>{el.year} - {el.properties.length}</Typography>
                                    })
                                }

                            </div>
                        </>
                        }
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <Typography color={"primary"}>Корпуса</Typography>
                            {korpuses.map((el) => {
                                return <Typography variant={"body2"}
                                                   key={el.korpus}>{el.korpus} - {el.properties.length}</Typography>
                            })}
                            <Divider/>
                            <Typography color={"primary"}>Факультеты</Typography>
                            {["1", "9"].map((key) => {
                                return <Typography variant={"body2"} key={key}>{key} - 15 шт </Typography>
                            })}
                        </>
                        }
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <Typography>Материально-ответственные лица</Typography>
                            <Divider/>
                            {matfyos.map((el) => {
                                return <Typography variant={"body2"}
                                                   key={el.matfyo}>{el.matfyo} - {el.properties.length}</Typography>
                            })}
                        </>
                        }
                    </Paper>
                </Grid>

            </Grid>
            {activeType ? <>
            </> : ""}
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    {technics.map(key => {
                        return (
                            <Card key={key.room} className={classes.roomItem}>
                                <Typography variant={"h5"}
                                            className={`${classes.roomNumber} `}>{!(Number.parseInt(key.room)) ? key.room : `${key.room} кабинет`}</Typography>
                                <List dense>
                                    {key.properties.map((el, i) => {
                                        return !toogleLoadingInfoFotType ? <MiniCardTechnic key={i} el={el}/> :
                                            <MiniCardTechnicSkeleton key={i}/>
                                    })}
                                </List>
                            </Card>
                        )


                    })}
                </Grid>
                <Grid item xs={4}>
                    <ListTypes/>
                </Grid>
            </Grid>
            <Modal handleClose={handleClose} open={open} title={technicActive.name}>


            </Modal>
        </Container>
    )
}

export default withRouter(TypePage)

export const SceletonInfoType = () => {
    return <div>
        <Skeleton/>
        <Skeleton animation={false}/>
        <Skeleton animation="wave"/>
    </div>
}

