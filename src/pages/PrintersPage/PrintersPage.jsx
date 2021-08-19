import Typography from "@material-ui/core/Typography";
import {
    Button, Card, CardContent, Container, Divider, Grid,
    IconButton,
    List,
    ListItem, ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {useEffect, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import images from "../../components/global/images";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from "react-router-dom";
import groupElementsByDate from "../../components/global/groupElementsByDate";

const PrintersPage = ({
                          getAllRefills,
                          getCurrentRefills,
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

    const getCountRefill = (id) => {
        let count = allRefills.filter(el => el.technicId === id).length
        return count
    }

    let refoiellElements = groupElementsByDate(allRefills, "receiverDate").map(el => {
        return <div>
            <div>{el.date}</div>
            <ul>{el.properties.map(element => {
                return <li>[{element.countRefill}]{element.name} {element.receiverDate - element.createDate}</li>
            })}</ul>
        </div>
    })
    const handlerRefills = (el) => {
        let obj = {
            "technicId": el.id,
            "name": el.name,
            "user": el.user,
            "createDate": Date.now(),
            "countRefill": getCountRefill(el.id) + 1
        }
        changeCategory(obj, 'new')
    }

    return (
        <Container>
            {currentRefill && <div style={{display: "flex", justifyContent: "space-evenly", margin: "20px 0"}}>
                {currentRefill.map((obj, i) => {
                    return <Card style={{width: "23%"}}>
                        <CardContent>
                            <Typography variant={"h6"}>{obj.name}</Typography>
                            <List dense>
                                {obj.arr.map(el => {
                                    return <ListItem button>
                                        <ListItemText primary={`[${el.countRefill || 1}]  ${el.name}`}
                                                      secondary={`${el.user}`}></ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={() => changeCategory(el, i)} color="secondary"
                                                        aria-label="add an alarm">
                                                <DoubleArrowIcon/>
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
            <Divider/>
            <div>
                <Typography>Последние заправки</Typography>
                {refoiellElements}
            </div>
            <Divider/>
            <div>
                <Typography>Картриджи в шкафу</Typography>
                <div>
                    <ul>
                        <li>23124</li>
                        <li>23124</li>
                        <li>23124</li>
                        <li>23124</li>
                    </ul>
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
                                        <DoubleArrowIcon/>
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