import {withRouter, useHistory, useLocation} from "react-router-dom";
import {
    Button,
    Container, DialogActions, DialogContent,
    Divider,
    Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText,
    Paper, TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import ListTypes from "../../components/ListTypes";

import ListTechnics from "../../components/ListTechnics";
import ActiveCategories from "../../components/ActiveCategories";
import FiltersTechnic from "../../components/FiltersTechnic";
import Modal from "../../components/Modal";
import {useForm} from "react-hook-form";
import Choose from "../../assets/img/undraw_Choose_re_7d5a.svg"
import * as queryString from "querystring";

import {useStyles} from "./TypePageStyle";
import CloseIcon from "@material-ui/icons/Close";

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

const TypePage = ({getTechnics, addTechnic, tech}) => {

    let history = useHistory();
    const {search} = useLocation()
    const searchData = queryString.parse(search)
    const classes = useStyles();
    const [categories, setCategories] = useState(() => [])
    const [activeTypes, setActiveTypes] = useState(() => [])
    const [open, setOpen] = useState(false);
    const {register, handleSubmit} = useForm();
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = data => addTechnic(data);
    const handlerCategory = (prop, value) => {
        let checkValueInObj = () => {
            if (searchData[prop] === undefined) {
                return value
            } else {

                if (searchData[prop].includes(value)) {
                    return searchData[prop].split(',').filter(el => el !== value).join(',')
                } else {
                    return searchData[prop] + `,${value}`
                }
            }
        }
        let a = {...searchData, [prop]: checkValueInObj()}
        let b = Object.entries(a).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {})
        let d = queryString
            .stringify(b)
            .replaceAll("%2C", ",")
            .replaceAll("%3F", "")
        history.push({
            search: d
        })
    }

    const mergeObj = (obj) => {
        return Object.keys(obj).map(el => {
            if (el === `?type`) {
                return ""
            } else {
                return obj[el].map((key) => {
                    return {[el]: key}
                })
            }

        }).flat().filter(n => n)

    }

    useEffect(() => {
        let obj = Object.keys(searchData).reduce(function (accum, currentVal) {
            accum[currentVal] = searchData[currentVal].split(',');
            return accum;
        }, {})
        setActiveTypes(obj.["?type"])
        setCategories(mergeObj(obj))
    }, [search])

    useEffect(() => {
        getTechnics(activeTypes)  //Получение техники с сервера
    }, [activeTypes])

    return (
        <Container>
            {
                (activeTypes !== undefined) && <Grid container className={classes.wrapperInfo} spacing={3}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Typography color={"primary"}>Активные типы техники</Typography>
                            <Divider/>
                            <div className={classes.typeInfoWrapper}>
                                <List dense>
                                    {
                                        (activeTypes) && <>
                                            {
                                                activeTypes.map(el => {
                                                    return <ListItem button>
                                                        <ListItemText primary={`${el} - 25 шт.`}/>
                                                        <ListItemSecondaryAction>
                                                            <IconButton onClick={() => handlerCategory("?type", el)}>
                                                                <CloseIcon />
                                                            </IconButton>
                                                        </ListItemSecondaryAction>
                                                    </ListItem>
                                                })
                                            }
                                        </>
                                    }
                                </List>
                            </div>
                        </Paper>
                    </Grid> {/*  Тип, картинка */}
                    <Grid item xs={9}>
                        <Paper className={classes.paper}>
                            <Typography color={"primary"}>Фильтрация</Typography>
                            <Divider/>
                            <FiltersTechnic categories={categories} handlerCategory={handlerCategory}/>
                        </Paper>
                    </Grid> {/*  Фильтрация*/}
                </Grid>

            }
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <ActiveCategories categories={categories} handlerCategory={handlerCategory}/>
                    {
                        (activeTypes)
                            ? <ListTechnics tech={tech} categories={categories} setCategories={setCategories}/>
                            : <Paper style={{padding: "50px 180px", marginTop: "50px"}}>
                                <img width={400} src={Choose} alt="Выберите"/>
                                <Typography style={{marginTop: "30px"}} variant={"h5"}>Необходимо выбрать тип техники
                                    =></Typography>
                            </Paper>
                    }

                </Grid> {/*  Список техники по кабинетам*/}
                <Grid item xs={4}>
                    <ListTypes activeTypes={activeTypes} handlerCategory={handlerCategory}/>
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
