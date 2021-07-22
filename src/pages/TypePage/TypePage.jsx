import {withRouter, useParams, Link} from "react-router-dom";
import {
    Button,
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
import EditIcon from '@material-ui/icons/Edit';
import Modal from "../../components/Modal";
import {useForm, FormProvider, useFormContext} from "react-hook-form";
import FormTechItem from "../../components/FormTech/FormTech";
import {Alert} from "@material-ui/lab";

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

}));

const TypePage = ({
                      getActiveType,
                      activeType,
                      technics,
                      yearsOfProduction,
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
    useEffect(() => {
        getActiveType(params.type)
    }, [])

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
                            <Paper className={classes.imageType} style={{cursor: "pointer"}} onClick={selectIcon}>
                                <PrintIcon className={classes.icon}/>
                            </Paper>
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
                        <Typography  color={"primary"}>Годы выпуска</Typography>
                        <Divider/>
                        <div>
                            {Object.keys(yearsOfProduction).map((key) => {
                                return <Typography variant={"body2"}  key={key}>{key} - {yearsOfProduction[key].length}</Typography>
                            })}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography color={"primary"} >Корпуса</Typography>
                        {["1","9"].map((key) => {
                            return <Typography variant={"body2"} key={key}>{key} - 15 шт </Typography>
                        })}
                        <Divider/>
                        <Typography color={"primary"}>Факультеты</Typography>
                        {["1","9"].map((key) => {
                            return <Typography variant={"body2"} key={key}>{key} - 15 шт </Typography>
                        })}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography>Материально-ответственные лица</Typography>
                        <Divider/>
                    </Paper>
                </Grid>
            </Grid>
            {activeType ? <>
            </> : ""}
            <div>
                {Object.keys(technics).map(key => {
                    return (
                        <Paper key={key}>
                            <h2>{technics[key][0].room} кабинет</h2>
                            <List dense >
                            {technics[key].map(el => {
                                return <ListItem component={Link} key={el.id} to={`/technics/${el.id}`} button>
                                    <ListItemIcon>
                                        <DraftsIcon/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={el.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    {el.fyo}
                                                </Typography>
                                                - [ {!el.invent ? <Button color="secondary">Заполнить</Button> : el.invent} ]- [ {!el.zavod ? <Button color="secondary">Заполнить</Button> : el.zavod} ]
                                            </React.Fragment>
                                        }
                                    />
                                    <ListItemSecondaryAction>
                                        {/*<Fab size="small" color="secondary"*/}
                                        {/*     onClick={() => handleClickOpen(el)}><EditIcon/></Fab>*/}
                                    </ListItemSecondaryAction>
                                </ListItem>
                            })}
                            </List>
                        </Paper>
                    )


                })}
            </div>
            <Modal handleClose={handleClose} open={open} title={technicActive.name}>
                <FormProvider>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} property={"name"} label={"Наименование"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} property={"type"} label={"Тип"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} property={"invent"}*/}
                            {/*                  label={"Инвентарный номер"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} property={"zavod"}*/}
                            {/*                  label={"Заводской номер"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} addUser={addUser} items={users}*/}
                            {/*                  property={"fyo"} label={"ФИО сотрудника"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} addUser={addUser} items={users}*/}
                            {/*                  property={"matfyo"} label={"Материально-ответственное лицо"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} property={"korpus"} label={"Корпус"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} property={"room"} label={"Кабинет"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} items={subdivisions}*/}
                            {/*                  property={"subdivision"} label={"Подразделение"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} property={"year"} label={"Год получения"}/>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <FormTechItem technicActive={technicActive} property={"isTrusted"}*/}
                            {/*                  label={"Комментарий"}/>*/}
                            {/*</Grid>*/}
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