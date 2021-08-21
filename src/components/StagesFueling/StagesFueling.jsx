import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardContent, DialogActions, DialogContent, DialogContentText,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Menu, MenuItem
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Modal from "../Modal";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    copyText: {
        marginLeft: "10px",
        border: "1px solid #a0a0a0",
        borderRadius: "7px",
        cursor: "pointer",
        padding: "6px",
        '&:hover': {
            backgroundColor: '#e6e6e6'
        }
    },
}))

const StagesFueling = ({getCurrentRefills, addRefillForPrinter, updateCurrentRefills}) => {
    const classes = useStyles();

    useEffect(() => {
        async function fetchCurrentRefills() {
            let response = await getCurrentRefills()
            setCurrentRefill(response)
            return response
        }

        fetchCurrentRefills()
    }, [])
    const changeCategory = (el, index) => {
        let a = currentRefill.map((obj, i) => {
            if (index === 3) {
                index = 'finish'
            }
            if (index === 'new') {
                if (i === 0) {
                    return {
                        name: obj.name,
                        arr: [...obj.arr, el]
                    }
                } else {
                    return {
                        name: obj.name,
                        arr: obj.arr
                    }
                }
            } else if (index === 'finish') {
                if (i === 3) {
                    addRefillForPrinter(el.technicId, el)
                    return {
                        name: obj.name,
                        arr: obj.arr.filter(elem => el.technicId !== elem.technicId)
                    }
                } else {
                    return {
                        name: obj.name,
                        arr: [...obj.arr]
                    }
                }
            } else {
                if (i === index) {
                    return {
                        name: obj.name,
                        arr: obj.arr.filter(elem => el.technicId !== elem.technicId)
                    }
                } else if (i === (index + 1)) {
                    return {
                        name: obj.name,
                        arr: [...obj.arr, el]
                    }
                } else {
                    return {
                        name: obj.name,
                        arr: obj.arr
                    }
                }

            }
        })
        setCurrentRefill(a)
        updateCurrentRefills(a)
    }
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeElement, setActiveElement] = useState('')
    const [currentRefill, setCurrentRefill] = useState([])
    const [open, setOpen] = React.useState(false);


    const handleClick = (event, el) => {
        setActiveElement(el)
        setOpen(true)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose1 = () => {
        setOpen(false);
    };

    return (
        <>
            {currentRefill && <div style={{display: "flex", justifyContent: "space-evenly", margin: "20px 0"}}>
                {currentRefill.map((obj, i) => {
                    return <Card style={{width: "23%"}}>
                        <CardContent>
                            <Typography variant={"h6"}>{obj.name}</Typography>
                            <List dense>
                                {obj.arr.map(el => {
                                    return <ListItem onDoubleClick={() => changeCategory(el, i)} button>
                                        <ListItemText primary={`[${el.countRefill || 1}]  ${el.name}`}
                                                      secondary={`${el.user}`}></ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton color="secondary" aria-controls="simple-menu"
                                                        aria-haspopup="true"
                                                        onClick={(e) => handleClick(e, el)}>
                                                <ArrowDropDownIcon/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                })}
                            </List>
                        </CardContent>
                    </Card>
                })
                }

            </div>}
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Далее</MenuItem>
                <MenuItem onClick={handleClose}>Информация</MenuItem>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
            </Menu>
            <Modal open={open} handleClose={handleClose} title={"Добавить тип"}>
                <DialogContent>
                    <DialogContentText>
                        Ссылка на заполнение (старых/пустых) картриджей - <a target={"_blank"}
                                                                             href="https://docs.google.com/forms/d/e/1FAIpQLSfwyQfBoHyUEOBPXQfIfcq4CTGpxdW3SxuR842KNBWhLMqo_w/viewform">здесь</a>
                    </DialogContentText>
                    <Typography>ФИО ответственного лица
                        <Typography className={classes.copyText} component={"span"} onClick={() => {
                            navigator.clipboard.writeText('Клевжиц Александр Юрьевич')
                        }}>Клевжиц Александр Юрьевич</Typography>
                    </Typography>
                    <Typography>Адрес электронной почты
                        <Typography className={classes.copyText} component={"span"} onClick={() => {
                            navigator.clipboard.writeText('ipkip.bspu@gmail.com@bspu.by')
                        }}>ipkip.bspu@gmail.com</Typography>
                    </Typography>
                    <Typography>Номер кабинета
                        <Typography className={classes.copyText} component={"span"} onClick={() => {
                            navigator.clipboard.writeText('Запрос')
                        }}>Запрос</Typography>
                    </Typography>
                    <Typography>Год выпуска
                        <Typography className={classes.copyText} component={"span"} onClick={() => {
                            navigator.clipboard.writeText('Запрос')
                        }}>Запрос</Typography>
                    </Typography>
                    <Typography>Инвентарный номер оргтехники
                        <Typography className={classes.copyText} component={"span"} onClick={() => {
                            navigator.clipboard.writeText('Запрос')
                        }}>Запрос</Typography>
                    </Typography>
                    <Typography>Модель оргтехники и номер картриджа
                        <Typography className={classes.copyText} component={"span"} onClick={() => {
                            navigator.clipboard.writeText('Запрос')
                        }}>Запрос</Typography>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose1} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose1} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>

            </Modal>
        </>
    )
}

export default StagesFueling