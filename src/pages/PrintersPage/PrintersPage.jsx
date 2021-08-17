import Typography from "@material-ui/core/Typography";
import {
    Button, Container,
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

const PrintersPage = ({getAllRefills, getCurrentRefills, currentRefills, allRefills, getPrintersAll, printers, updateCurrentRefills}) => {
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
    }, [])

    const changeCategory = (numbercategory = 0, elID) => {
        let a = currentRefill.map((obj, i) => {
            if (i === numbercategory) {
                return {
                    name: obj.name,
                    arr: obj.arr.filter(el => el !== elID)
                }
            } else if (i === (numbercategory + 1)) {
                return {
                    name: obj.name,
                    arr: [...obj.arr, elID]
                }
            } else {
                return obj
            }
        })
        setCurrentRefill(a)
        updateCurrentRefills(a)
    }

    const handlerRefills = (id) => {
        console.log(id)
    }

    return (
        <Container>
            {currentRefill && <div style={{display: "flex", justifyContent: "space-evenly"}}>
                {currentRefill.map((obj, i) => {
                    return <div>
                        <Typography variant={"h6"}>{obj.name}</Typography>
                        <List dense>
                            {obj.arr.map(el => {
                                return <ListItem button>
                                    <ListItemText primary={el}
                                                  secondary={el}></ListItemText>
                                    <ListItemSecondaryAction><Button onClick={() => changeCategory(i, el)}
                                                                     variant={"contained"}>=></Button></ListItemSecondaryAction>
                                </ListItem>
                            })}
                        </List>
                    </div>
                })
                }

            </div>}

            <div>
                <List>
                    {
                        printers.map(el => {
                            return <ListItem button>
                                <ListItemAvatar>
                                    <Avatar variant={"square"} src={images[el.name]}></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={el.name} secondary={el.user}/>
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => handlerRefills(el.id)} color="secondary"
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