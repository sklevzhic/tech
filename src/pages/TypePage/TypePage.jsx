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
import FiltersTechnic from "../../components/FiltersTechnic/FiltersTechnic";

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

    const [filters, setFilters] = useState(() => [])
    const [yearsStart, setYearsStart] = useState([]);
    const [buildsStart, setBuildsStart] = useState([]);

    useEffect(() => {
        getActiveType(params.type)
        // setYearsStart([])
        // setBuildsStart([])
    }, [params.type]) // получение техники по api-запросу, обновление при смене url
    const handleClickButton = (value, type) => {
        let obj = {
            "type": type,
            "value": value
        }
        setFilters((oldObj) => {
            let isTrue = oldObj.some(el => {
                if (deepEqual(el, obj)) {
                    return true
                }
            })
            if (isTrue) {
                return oldObj.filter(el => {
                    return console.log('есть')
                })
            } else {
                return [...oldObj, obj]

            }


        })
    } // добавление {годов выпуска, корпусов, фио сотруников} в url
    const isContains = (arr, obj) => {
        console.log(arr)
        console.log(obj)
        return true
    }
    console.log(filters)
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
                        <FiltersTechnic />
                    </Paper>
                </Grid> {/*  Годы выпуска */}


                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <Typography color={"primary"}>Годы выпуска</Typography>
                            <Divider/>
                            <List dense={true} className={classes.years}>
                                {
                                    yearsOfProduction.map(el => {
                                        return <ListItem button
                                                         className={(isContains(filters, el.year)) ? classes.activeItem : ''}
                                                         onClick={() => handleClickButton(el.year)}
                                                         key={el.year}>
                                            <ListItemIcon>
                                                <FolderIcon/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={`${el.year} - ${el.properties.length} шт`}
                                            />
                                        </ListItem>
                                    })
                                }

                            </List>
                        </>
                        }
                    </Paper>
                </Grid> {/*  Годы выпуска */}
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <Typography color={"primary"}>Корпуса</Typography>
                            <Divider/>
                            <List dense={true}>
                                {korpuses.map((el) => {
                                    return <ListItem button
                                                     className={(buildsStart.includes(el.korpus)) ? classes.activeItem : ''}
                                                     onClick={() => handleClickButton(el.korpus, "build")}
                                                     key={el.korpus}>
                                        <ListItemIcon>
                                            <FolderIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={`${el.korpus} - ${el.properties.length} шт`}
                                        />
                                    </ListItem>
                                })}
                            </List>
                            <Divider/>
                            <Typography color={"primary"}>Факультеты</Typography>
                            {["1", "9"].map((key) => {
                                return <Typography variant={"body2"} key={key}>{key} - 15 шт </Typography>
                            })}
                        </>
                        }
                    </Paper>
                </Grid> {/*  Корпуса */}
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
                </Grid> {/*  Материально ответственные лица */}
            </Grid> {/*  Сводная информация в столбцах */}
            {activeType ? <>
            </> : ""}
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <ActiveCategories yearsStart={yearsStart} buildsStart={buildsStart}/>

                    <ListTechnics yearsStart={yearsStart}/>
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

