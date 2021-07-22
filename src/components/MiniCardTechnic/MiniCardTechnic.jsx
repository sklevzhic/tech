import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Button, Chip, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import DraftsIcon from "@material-ui/icons/Drafts";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        // background: "#e6e6e6"
    }
}))
const MiniCardTechnic = ({el}) => {
    const classes = useStyles();
    return (
        <ListItem className={classes.root} component={Link} key={el.id} to={`/technics/${el.id}`} button>
            <ListItemIcon>
                <Avatar>{el.type.toString()[0]}</Avatar>
            </ListItemIcon>
            <ListItemText
                primary={el.name}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {el.fyo}
                        </Typography>
                        - [ {!el.invent ?
                        <Button color="secondary">Заполнить</Button> : el.invent} ]-
                        [ {!el.zavod ?
                        <Button color="secondary">Заполнить</Button> : el.zavod} ]
                        <div>
                            {
                                (typeof el.type === 'object')
                                    ? <>{el.type.map(el => {
                                        return <Chip
                                            avatar={<Avatar>{el[0]}</Avatar>}
                                            label={el}
                                            variant="outlined"
                                        />
                                    })}</>


                                    : <Chip
                                        avatar={<Avatar>{el.type[0]}</Avatar>}
                                        label={el.type}
                                        variant="outlined"
                                    />}
                        </div>
                    </React.Fragment>
                }
            />
            <ListItemSecondaryAction>
                {/*<Fab size="small" color="secondary"*/}
                {/*     onClick={() => handleClickOpen(el)}><EditIcon/></Fab>*/}
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default MiniCardTechnic