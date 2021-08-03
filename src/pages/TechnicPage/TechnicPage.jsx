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
} from "@material-ui/core";
import {deepOrange} from '@material-ui/core/colors';
import ControlledAccordions from "../../components/Accordion";
import Button from "@material-ui/core/Button";
import icons from "../../components/global/global";
import {useForm} from "react-hook-form";
import ListItemForm from "../../components/ListItemForm";

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


const TechnicPage = ({activeTechnic, getTechnicInfo, users}) => {
    const {register, handleSubmit} = useForm();
    useEffect(() => {
        getTechnicInfo(params.id)
    }, [])
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
                                <ListItemForm activeTechnic={activeTechnic} property={"room"} text={"Кабинет"}/>
                                <ListItemForm activeTechnic={activeTechnic} property={"korpus"} text={"Корпус"}/>
                                <ListItemForm activeTechnic={activeTechnic} property={"fyo"} text={"ФИО сотрудника"}
                                              array={users}/>
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
                            <ListItemForm activeTechnic={activeTechnic} property={"invent"} text={"Инвентарный номер"}/>
                            <ListItemForm activeTechnic={activeTechnic} property={"zavod"} text={"Заводской номер"}/>
                            <ListItemForm activeTechnic={activeTechnic} property={"matfyo"}
                                          text={"Материально-ответственное лицо"}/>

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