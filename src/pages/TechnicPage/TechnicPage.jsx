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
                            ><HomeIcon style={{fontSize: 75}}/>
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
                                        <Avatar>M</Avatar>
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{primary: classes.listItemText}}
                                        primary={activeTechnic.room || "Заполнить"}
                                        secondary={"Кабинет"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar>M</Avatar>
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{primary: classes.listItemText}}
                                        primary={activeTechnic.korpus || "Заполнить"}
                                        secondary={"Корпус"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar>M</Avatar>
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{primary: classes.listItemText}}
                                        primary={activeTechnic.fyo || "Заполнить"}
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
                                    <Avatar>M</Avatar>
                                </ListItemIcon>
                                <ListItemText
                                    classes={{primary: classes.listItemText}}
                                    primary={activeTechnic.zavod || "Заполнить"}
                                    secondary={"Заводской номер"}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar>M</Avatar>
                                </ListItemIcon>
                                <ListItemText
                                    classes={{primary: classes.listItemText}}
                                    primary={activeTechnic.invent || "Заполнить"}
                                    secondary={"Инвентарный номер"}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar>M</Avatar>
                                </ListItemIcon>
                                <ListItemText
                                    classes={{primary: classes.listItemText}}
                                    primary={activeTechnic.matfyo || "Заполнить"}
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
                    <Grid item xs={6}>
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
                                </> : <Button >Заполнить</Button>}
                            </CardContent>

                        </Card>
                    </Grid>
                }
            </Grid>

        </Container>
    )
}

export default connect(({firstName, lastName}) => ({firstName, lastName}))(TechnicPage);