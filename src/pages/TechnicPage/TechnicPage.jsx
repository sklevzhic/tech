import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
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
    List, ListItem, ListItemAvatar, ListItemText,
} from "@material-ui/core";
import {deepOrange} from '@material-ui/core/colors';
import ControlledAccordions from "../../components/Accordion";
import Button from "@material-ui/core/Button";
import ListItemForm from "../../components/ListItemForm";
import Icon from "../../components/Icon";
import countDays from "../../components/global/countDays";
import {useForm} from "react-hook-form";
import {format} from "date-fns";
import images from "../../components/global/images";

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
        cursor: "pointer"
    },
    technicInfoWrapper: {
        padding: "20px"
    },
    listItemText: {
        fontSize: '1.1em',
        fontWeight: "bold"
    },
    paper: {
        padding: "10px",
        width: "100%"
    },
    repairs: {
        display: "flex",
        justifyContent: "space-around"
    },
    repair: {
        minWidth: "200px",
        width: "23%",
        textAlign: "center"
    },
    margin: {
        margin: "20px 0"
    }
}))
let repair = [
    {
        id: '1',
        application: '2017-05-25',
        message: 'message',
        dispatch: '2017-05-27',
        getting: '2017-05-29'
    },
    {
        id: '2',
        application: '2017-05-25',
        message: 'message',
        dispatch: '2017-05-27',
        getting: '2017-05-29'
    },
    {
        id: '3',
        application: '2017-05-25',
        message: 'message',
        dispatch: '2017-05-27',
        getting: '2017-05-29'
    },
    {
        id: '4',
        application: '2017-05-25',
        message: 'message',
        dispatch: '2017-05-27',
        getting: '2017-05-29'
    },

]

const TechnicPage = ({activeTechnic, getTechnicInfo, users, addComment, activeTechnicComments, getComments, getRefills, refills}) => {
    useEffect(() => {
        getTechnicInfo(params.id)
        getComments(params.id)
        getRefills(params.id)
    }, [])
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        addComment(activeTechnic.id, data.msg)
    };
    const classes = useStyles();
    const params = useParams();
    const formatDate = (value) => {
        return format(new Date(value), 'dd.MM.yyyy')
    }
    const addImage = (name) => {
        console.log(images[name])
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper>
                        <div className={classes.avatarWrapper}>
                            <Avatar
                                variant={"square"}
                                src={images[activeTechnic.name]}
                                className={classes.avatar}
                            >
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
                                <ListItemForm activeTechnic={activeTechnic} property={"build"} text={"Корпус"}/>
                                <ListItemForm activeTechnic={activeTechnic} property={"user"} text={"ФИО сотрудника"}
                                              array={users}/>
                                <ListItemForm activeTechnic={activeTechnic} property={"date"}
                                              text={"Дата получения"}/>
                                <ListItemForm activeTechnic={activeTechnic} property={"faculty"}
                                              text={"Факультет"}/>
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
                            <ListItemForm activeTechnic={activeTechnic} property={"year"} text={"Год выпуска"}/>
                            <ListItemForm activeTechnic={activeTechnic} property={"print"} text={"Наклейка"}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid className={classes.margin} container spacing={2}>
                <Paper className={classes.paper}>
                    <Typography gutterBottom variant="h6" component="h2">
                        Комментарии
                    </Typography>
                    <Typography>Описание: {activeTechnic.desc}</Typography>
                    <Typography>Проблема: {activeTechnic.problem}</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue="test" {...register("msg")} />
                        <input type="submit"/>
                    </form>
                    <List>
                        {activeTechnicComments.map((el, i) => {
                            return <ListItem key={i}>
                                <ListItemAvatar>
                                    <Avatar>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={el.body} secondary={formatDate(el.date)}/>
                            </ListItem>
                        })}

                    </List>


                </Paper>

            </Grid>
            <Grid container className={classes.margin} spacing={2}>
                <Paper className={classes.paper}>
                    <div style={{display: "flex"}}>
                        <Typography gutterBottom variant="h6" component="h2">
                            Заявки на ремонт
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Icon type={"send"}></Icon>}
                        >
                            Send
                        </Button>
                    </div>

                    <div className={classes.repairs}>
                        {repair.map(el => {
                            return <Card className={classes.repair}>
                                <CardContent>
                                    <Typography>Дата заявки: {el.application}</Typography>
                                    <Typography>Проблема: {el.message}</Typography>
                                    <Typography>Дата передачи: {el.dispatch}</Typography>
                                    <Typography>Дата получения: {el.getting}</Typography>
                                    <Typography>Всего в ремонте: {countDays(el.dispatch, el.getting)}</Typography>

                                </CardContent>
                            </Card>
                        })}
                    </div>
                </Paper>

            </Grid>
            <Grid container className={classes.margin} spacing={2}>
                {
                    ((activeTechnic.type === 'Принтер') || (activeTechnic.type === 'МФУ') || (activeTechnic.type === 'Ксерокс')) &&
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="h6" component="h2">
                            Заправки
                        </Typography>
                        <Button component={Link} to={"/printers"} variant={"contained"} color={"primary"}>Заполнить</Button>
                        <Typography variant={"body2"}>Максимальное количество
                            заправок за год: 2</Typography>
                        <Divider/>
                        {/*<Steppers/>*/}

                        {refills ? <>
                            <div>

                                <ControlledAccordions array={refills}/>
                            </div>
                        </> : <Button component={Link} to={"/printers"}>Заполнить</Button>}
                    </Paper>
                }
            </Grid>
            <Grid container className={classes.margin} spacing={2}>
                <Paper className={classes.paper}>
                    <div style={{display: "flex"}}>
                        <Typography gutterBottom variant="h6" component="h2">
                            Техника в этом кабинете
                        </Typography>
                    </div>
                    <div>
                        <Button component={Link} to={`/room/${activeTechnic.room}`}>Техника кабинета</Button>

                    </div>

                </Paper>

            </Grid>

        </Container>
    )
}

export default TechnicPage;