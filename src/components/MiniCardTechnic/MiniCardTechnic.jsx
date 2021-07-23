import {makeStyles} from "@material-ui/core/styles";
import {
    Avatar,
    Button,
    Chip,
    Fab,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText, Tooltip
} from "@material-ui/core";
import {Link} from "react-router-dom";
import DraftsIcon from "@material-ui/icons/Drafts";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({}))

const MiniCardTechnic = ({el,keys}) => {

    const classes = useStyles();
    return (
        <ListItem component={Link} key={el.id} to={`/technics/${el.id}`} button>
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
                        <Button color="secondary">Заполнить</Button> : el.invent} ]
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
            <ListItemSecondaryAction style={{display: "flex"}}>
                {Object.keys(keys).map(key => {
                    if (!el[keys[key].key]) {
                        return <Tooltip title={keys[key].name}><span style={{
                            display: "block",
                            width: "10px",
                            textAlign: "center",
                            color: "white",
                            marginRight: "2px",
                            background: keys[key].bg
                        }}>!</span></Tooltip>
                    }
                })}
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default MiniCardTechnic