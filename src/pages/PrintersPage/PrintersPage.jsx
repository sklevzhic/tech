import Typography from "@material-ui/core/Typography";
import {
    Button, Container, Divider,
    IconButton,
    List,
    ListItem, ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {useEffect, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import images from "../../components/global/images";
import AlarmIcon from '@material-ui/icons/Alarm';
import {Link} from "react-router-dom";

const PrintersPage = ({
                          getAllRefills,
                          getCurrentRefills,
                          currentRefills,
                          allRefills,
                          getPrintersAll,
                          printers,
                          updateCurrentRefills,
                          addRefillForPrinter
                      }) => {
    const [currentRefill, setCurrentRefill] = useState([])

    useEffect(() => {
        async function fetchCurrentRefills() {
            let response = await getCurrentRefills()
            setCurrentRefill(response)
            return response
        }

        fetchCurrentRefills()
    }, [])

    useEffect(() => {
        getPrintersAll()
        getAllRefills()
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

    const getCountRefill = () => {
        return 2
    }


    const handlerRefills = (el) => {
        let obj = {
            "technicId": el.id,
            "name": el.name,
            "user": el.user,
            "createDate": Date.now(),
            "countRefill": getCountRefill()
        }
        changeCategory(obj, 'new')
    }

    return (
        <Container>
            {currentRefill && <div style={{display: "flex", justifyContent: "space-evenly"}}>
                {currentRefill.map((obj, i) => {
                    return <div>
                        <Typography variant={"h6"}>{obj.name}</Typography>
                        <List dense>
                            {obj.arr.map(el => {
                                return <ListItem  button>
                                    <ListItemText primary={`[${el.countRefill}] ${el.name}`}
                                                  secondary={`${el.user}`}></ListItemText>
                                    <ListItemSecondaryAction><Button onClick={() => changeCategory(el, i)}
                                                                     variant={"contained"}>=></Button></ListItemSecondaryAction>
                                </ListItem>
                            })}
                        </List>
                    </div>
                })
                }

            </div>}
            <Divider/>
            <div>
                <Typography>Последние заправки</Typography>
                <div>
                    {allRefills.map(el => {
                        return el.user
                    })}
                </div>
            </div>
            <Divider/>
            <div>
                <Typography>Перечень техники</Typography>
                <List>
                    {
                        printers.map(el => {
                            return <ListItem component={Link} to={`/technics/${el.id}`} button>
                                <ListItemAvatar>
                                    <Avatar variant={"square"} src={images[el.name]}></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={el.name} secondary={el.user}/>
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => handlerRefills(el)} color="secondary"
                                                aria-label="add an alarm">
                                        <AlarmIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        })
                    }
                </List>
            </div>


        </Container>
    )
}

export default PrintersPage