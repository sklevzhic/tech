import {withRouter, useParams, useLocation, useHistory} from "react-router-dom";
import {
    Card,
    Container,
    Divider,
    Grid,
    List, ListItem, ListItemIcon, ListItemText,
    Paper
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListTypes from "../../components/ListTypes";
import {Skeleton} from "@material-ui/lab";
import queryString from 'query-string'
import FolderIcon from '@material-ui/icons/Folder';
import Icon from "../../components/Icon";
import ListTechnics from "../../components/ListTechnics";
import ActiveCategories from "../../components/ActiveCategories";
import deepEqual from "../../components/global/deepEqual";
import FiltersTechnic from "../../components/FiltersTechnic";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        position: "relative",
        height: "250px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    years: {
        height: "80%",
        overflow: "overlay"

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
    activeItem: {
        background: "red",
    },
    roomNumber: {}
}));

const TypePage = ({
                      getActiveType,
                      activeType,
                      yearsOfProduction,
                      toogleLoadingInfoFotType,
                      matfyos,
                      korpuses
                  }) => {
    const {search} = useLocation()
    const {years, builds} = queryString.parse(search)
    const classes = useStyles();
    const params = useParams();

    let a = {
        "year": ["2005", "2007"],
        "build": [],
        "room": [],
        "matfyo": ["Петрусев Сергей Викторович", "Маголина Алла Викторовна"],
    }
    const [categories, setCategories] = useState(() => a)

    useEffect(() => {
        getActiveType(params.type)
    }, [params.type]) // получение техники по api-запросу, обновление при смене url
    const isContains = (arr, obj) => {
        return true
    }
    return (
        <Container>
            <Grid container className={classes.wrapperInfo} spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <div className={classes.typeInfoWrapper}>
                                <div className={classes.typeInfo}>
                                    <Icon type={activeType.type}/>
                                    <Typography color={"primary"}>Тип</Typography>
                                    <Typography variant="h6">{activeType.name}</Typography>
                                    <Typography variant="body2" gutterBottom>
                                        [ {activeType.type} ]
                                    </Typography>
                                    Всего
                                </div>
                            </div>
                            <Divider/>
                        </>
                        }
                    </Paper>
                </Grid> {/*  Тип, картинка */}

                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <Typography color={"primary"}>Фильтрация</Typography>
                        <Divider/>
                        <FiltersTechnic categories={categories} setCategories={setCategories}/>
                    </Paper>
                </Grid> {/*  Годы выпуска */}
            </Grid> {/*  Сводная информация в столбцах */}
            {activeType ? <>
            </> : ""}
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <ActiveCategories categories={categories} setCategories={setCategories}/>

                    <ListTechnics categories={categories} setCategories={setCategories}/>
                    {/*  Список техники technics */}
                </Grid> {/*  Список техники по кабинетам*/}
                <Grid item xs={4}>
                    <ListTypes/>
                </Grid> {/*  Список типов техникик */}
            </Grid>
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

