import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import SvgIcon from '@material-ui/core/SvgIcon';
import {deepOrange} from '@material-ui/core/colors';
import {connect} from "react-redux";
import ControlledAccordions from "../../components/Accordion";
import Button from "@material-ui/core/Button";
import icons from "../../components/global/global";

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
    technicInfoWrapper: {
        padding: "20px"
    },
    listItemText: {
        fontSize: '1.1em',
        fontWeight: "bold"
    }
}))

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    );
}

const TechnicPage = ({activeTechnic, getTechnicInfo, types}) => {
    useEffect(() => {
        getTechnicInfo(params.id)
    }, [])
    const getIconType = () => {
        types.filter(el => {
            if (activeTechnic.type === el.name) {
                console.log(el.name)
            }
        })
    }
    console.log(types)
    const getIcon = (val, size) => {
        let Icon = icons[val]
        return <Icon style={{fontSize: `${size}px`}}/>
    }
    const classes = useStyles();
    const params = useParams();
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper>
                        <div className={classes.avatarWrapper}>
                            <Avatar
                                className={classes.avatar}
                            >
                                {getIcon("printer", 75)}
                            </Avatar>
                            <Divider className={classes.devider}/>
                            <Typography variant={"body2"} component={"span"}>{activeTechnic.type}</Typography>
                            <Typography variant={"h6"} component={"h1"}>{activeTechnic.name}</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                Место установки
                            </Typography>
                            <Divider/>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar>{getIcon("room")}</Avatar>
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{primary: classes.listItemText}}
                                        primary={activeTechnic.room ||
                                        <Button variant="contained" color="secondary">Заполнить</Button>}
                                        secondary={"Кабинет"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar>
                                            {getIcon("korpus")}
                                        </Avatar>
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{primary: classes.listItemText}}
                                        primary={activeTechnic.korpus ||
                                        <Button variant="contained" color="secondary">Заполнить</Button>}
                                        secondary={"Корпус"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar>{getIcon("fyo")}</Avatar>
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{primary: classes.listItemText}}
                                        primary={activeTechnic.fyo ||
                                        <Button variant="contained" color="secondary">Заполнить</Button>}
                                        secondary={"ФИО сотрудника"}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                Бухгалтерия
                            </Typography>
                            <Divider/>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar>{getIcon("zavod")}</Avatar>
                                </ListItemIcon>
                                <ListItemText
                                    classes={{primary: classes.listItemText}}
                                    primary={activeTechnic.zavod ||
                                    <Button variant="contained" color="secondary">Заполнить</Button>}
                                    secondary={"Заводской номер"}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar>{getIcon("invent")}</Avatar>
                                </ListItemIcon>
                                <ListItemText
                                    classes={{primary: classes.listItemText}}
                                    primary={activeTechnic.invent ||
                                    <Button variant="contained" color="secondary">Заполнить</Button>}
                                    secondary={"Инвентарный номер"}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar>{getIcon("matfyo")}</Avatar>
                                </ListItemIcon>
                                <ListItemText
                                    classes={{primary: classes.listItemText}}
                                    primary={activeTechnic.matfyo ||
                                    <Button variant="contained" color="secondary">Заполнить</Button>}
                                    secondary={"Материально-ответственное лицо"}
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                </Grid>
                {
                    !activeTechnic && <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Комментарий
                                </Typography>
                                <Divider/>
                                <Typography>
                                    {activeTechnic.desc}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                }
                {
                    ((activeTechnic.type === 'Принтер') || (activeTechnic.type === 'МФУ') || (activeTechnic.type === 'Ксерокс')) &&
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Заправки
                                </Typography>
                                <Typography variant={"body2"}>Максимальное количество
                                    заправок за год: 2</Typography>
                                <Divider/>
                                {/*<Steppers/>*/}

                                {activeTechnic.refill ? <>
                                    <ControlledAccordions array={activeTechnic.refill}/>
                                </> : <Button>Заполнить</Button>}
                            </CardContent>

                        </Card>
                    </Grid>
                }
            </Grid>

        </Container>
    )
}

export default TechnicPage;