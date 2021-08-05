import {withRouter, useParams, Link, useLocation, useHistory} from "react-router-dom";
import {
    Card,
    Container,
    Divider,
    Grid,
    List, ListItem, ListItemAvatar, ListItemIcon, ListItemText,
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
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import queryString from 'query-string'
import FolderIcon from '@material-ui/icons/Folder';
import {Print} from "@material-ui/icons";
import icons from '../../components/global/global';

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
    activeItem: {
        background: "red",
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
    const {search} = useLocation()
    let history = useHistory();
    const {years, builds} = queryString.parse(search)
    const classes = useStyles();
    const params = useParams();
    const [yearsStart, setYearsStart] = useState([]);
    const [buildsStart, setBuildsStart] = useState([]);
    useEffect(() => {
        [
            {type: years, arr: yearsStart},
            {type: builds, arr: buildsStart},
        ].map(el => {
            (el.type !== undefined) && el.type.split(",").map(elArr => {
                el.arr.push(elArr)
            })
        })

    }, [])  // получение данных с url
    useEffect(() => {
        getActiveType(params.type)
        setYearsStart([])
        setBuildsStart([])
    }, [params.type]) // получение техники по api-запросу, обновление при смене url
    const handleClickButton = (value, type) => {
        if (type === "year") {
            setYearsStart((oldArray) => {
                if (oldArray.includes(value)) {
                    return oldArray.filter(el => el !== value)
                }
                return [...oldArray, value]
            })
        }
        if (type === "build") {
            setBuildsStart((oldArray) => {
                if (oldArray.includes(value)) {
                    return oldArray.filter(el => el !== value)
                }
                return [...oldArray, value]
            })
        }
        history.push({
            search: `${(yearsStart !== 0) ? `&years=${yearsStart}` : ''}${(buildsStart !== 0) ? `&builds=${buildsStart}` : ''}`
        });
    } // добавление {годов выпуска, корпусов, фио сотруников} в url
    const icon = (type) => {
        if (icons[type] !== undefined) {
            let Icon = icons[type]
            return <Icon />
        } else {
            return <Print />
        }


    }
    return (
        <Container>
            <Grid container className={classes.wrapperInfo} spacing={3}>
                <Grid item xs={3}>

                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <div className={classes.typeInfoWrapper}>
                                <div className={classes.typeInfo}>
                                    {icon(activeType.type)}
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
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <Typography color={"primary"}>Годы выпуска</Typography>
                            <Divider/>
                            <List dense={true}>
                                {
                                    yearsOfProduction.map(el => {
                                        return <ListItem button
                                                         className={(yearsStart.includes(el.year)) ? classes.activeItem : ''}
                                                         onClick={() => handleClickButton(el.year, "year")}
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
                    <>
                        {console.log(yearsStart)}
                        {yearsStart.map(el => {
                            return <Chip avatar={<Avatar>Y</Avatar>} label={el}/>
                        })}
                        {buildsStart.map(el => {
                            return <Chip avatar={<Avatar>B</Avatar>} label={el}/>
                        })}
                    </>
                    {/*  Активные свойства фильтрации */}
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


                    })} {/*  Список техники technics */}
                </Grid>
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

