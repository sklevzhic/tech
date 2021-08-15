import {withRouter, useParams, useLocation, useHistory} from "react-router-dom";
import {
    Button,
    Container, DialogActions, DialogContent,
    Divider,
    Grid,
    Paper, TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListTypes from "../../components/ListTypes";
import {Skeleton} from "@material-ui/lab";
import Icon from "../../components/Icon";
import ListTechnics from "../../components/ListTechnics";
import ActiveCategories from "../../components/ActiveCategories";
import FiltersTechnic from "../../components/FiltersTechnic";
import Modal from "../../components/Modal";
import {useForm} from "react-hook-form";

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
        textAlign: "center"

    },
    typeInfo: {
        width: "100%"
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

const schema = [
    [
        {type: "name", name: "Наименование"},
        {type: "type", name: "Тип"},
    ],
    [
        {type: "room", name: "Кабинет"},
        {type: "build", name: "Корпус"},
        {type: "user", name: "ФИО сторудника"},
        {type: "date", name: "Дата выдачи"},
        {type: "faculty", name: "Факультет"}
    ],
    [
        {type: "invent", name: "Инвентарный номер"},
        {type: "zavod", name: "Заводской номер"},
        {type: "matfyo", name: "Материально-ответственное лицо"},
        {type: "year", name: "Год выпуска"},
    ]
]

const TypePage = ({getActiveType, activeType,addTechnic, toogleLoadingInfoFotType, technicsLength}) => {
    // const {search} = useLocation()
    // const {years, builds} = queryString.parse(search)
    const classes = useStyles();
    const params = useParams();
    const [categories, setCategories] = useState(() => [])
    const [open, setOpen] = React.useState(false);
    const {register, handleSubmit} = useForm();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = data => addTechnic(data);
    const handlerCategory = (prop, value) => {
        let property = () => {
            let obj = {[prop]: value}
            if (JSON.stringify(categories).includes(JSON.stringify(obj))) {
                return false
            } else {
                return true
            }
        } // Проверка наличия выбранной кабегории в массиве категорий
        setCategories(prevState => (property()) ? [...prevState, {[prop]: value}] : prevState.filter(el => ((Object.keys(el)[0], Object.values(el)[0]) !== (prop, value))))
    }

    useEffect(() => {
        getActiveType(params.type)
    }, [params.type]) // получение техники в соответствии с url, обновление при смене url

    return (
        <Container>
            <Grid container className={classes.wrapperInfo} spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        {toogleLoadingInfoFotType ? <SceletonInfoType/> : <>
                            <div className={classes.typeInfoWrapper}>
                                <div className={classes.typeInfo}>
                                    <Icon type={activeType.type} size={3}/>
                                    <Typography color={"primary"}>Тип</Typography>
                                    <Typography variant="h6">{activeType.name}</Typography>
                                    <Typography variant="body2" gutterBottom>
                                        [ {activeType.type} ]
                                    </Typography>
                                    <Divider/>
                                    <Typography
                                        variant={"subtitle2"}>
                                        Всего:
                                        <Typography
                                            variant={"subtitle1"}
                                            component={"span"}
                                        >
                                            {technicsLength}
                                        </Typography>
                                    </Typography>
                                    <Button color={"primary"} variant={"contained"}
                                            onClick={handleClickOpen}> Добавить</Button>
                                </div>

                            </div>
                        </>
                        }
                    </Paper>
                </Grid> {/*  Тип, картинка */}
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <Typography color={"primary"}>Фильтрация</Typography>
                        <Divider/>
                        <FiltersTechnic categories={categories} handlerCategory={handlerCategory}/>
                    </Paper>
                </Grid> {/*  Фильтрация*/}
            </Grid> {/*  Сводная информация*/}
            {activeType ? <>
            </> : ""}
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <ActiveCategories categories={categories} handlerCategory={handlerCategory}/>
                    <ListTechnics categories={categories} setCategories={setCategories}/>
                </Grid> {/*  Список техники по кабинетам*/}
                <Grid item xs={4}>
                    <ListTypes/>
                </Grid> {/*  Список типов техникик */}
            </Grid>
            <Modal open={open} handleClose={handleClose} title={"Добавить тип"}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <DialogContent>
                        <div>
                            {
                                schema[0].map(el => {
                                    return <TextField {...register(el.type)} label={el.name}/>
                                })
                            }
                        </div>
                        <div style={{display: "flex"}}>
                            <div>
                                {
                                    schema[1].map(el => {
                                        return <TextField {...register(el.type)} defaultValue={""} label={el.name}/>
                                    })
                                }
                            </div>
                            <div>
                                {
                                    schema[2].map(el => {
                                        return <TextField {...register(el.type)} label={el.name}/>
                                    })
                                }
                            </div>
                        </div>


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </form>
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

