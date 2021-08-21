import Typography from "@material-ui/core/Typography";
import {
    Button, Card, CardContent, Container, DialogActions, DialogContent, DialogContentText, Divider, Grid,
    IconButton,
    List,
    ListItem, ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText, Menu, MenuItem, Paper, TextField
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import images from "../../components/global/images";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from "react-router-dom";
import groupElementsByDate from "../../components/global/groupElementsByDate";
import Modal from "../../components/Modal";
import {makeStyles} from "@material-ui/styles";
import StagesFueling from "../../components/StagesFueling";

const useStyles = makeStyles((theme) => ({
    // copyText: {
    //     marginLeft: "10px",
    //     border: "1px solid #a0a0a0",
    //     borderRadius: "7px",
    //     cursor: "pointer",
    //     padding: "6px",
    //     '&:hover': {
    //             backgroundColor: '#e6e6e6'
    //     }
    // },
}))

const PrintersPage = ({
                          getAllRefills,
                          allRefills,
                          getPrintersAll,
                          printers,
                      }) => {
    // const classes = useStyles();

    useEffect(() => {
        getPrintersAll()
        getAllRefills()
    }, [])



    const getCountRefill = (id) => {
        let count = allRefills.filter(el => el.technicId === id).length
        return count
    }
    let latestRefueling = groupElementsByDate(allRefills, "receiverDate").map(el => {
        return <div>
            <div>{el.date}</div>
            <ul>{el.properties.map(element => {
                return <li>[{element.countRefill}]{element.name} {element.user}</li>
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
        // changeCategory(obj, 'new')
    }

    return (
        <Container>
            <StagesFueling />
            <Grid>
                <Paper style={{margin: "10px", padding: "10px"}}>
                    <Typography variant={"h6"}>Последние заправки</Typography>
                    <Divider/>
                    {latestRefueling}
                </Paper>
            </Grid>
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
                                        <ArrowDropDownIcon/>
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