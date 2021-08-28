import {
    Button,
    Chip, IconButton,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText, Tooltip
} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";
import images from "../global/images";
import Avatar from "@material-ui/core/Avatar";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import WarningData from "../WarningData/WarningData";

const MiniCardTechnic = ({el, keys, handlerRefills, filters}) => {

    return (
        <ListItem component={Link} key={el} to={`/technics/${el.id}`} button>

            <ListItemIcon>
                <Avatar variant={"square"} src={images[el.name]}></Avatar>
            </ListItemIcon>
            <ListItemText
                primary={`[${!el.invent ?
                    <Button color="secondary">Заполнить</Button> : el.invent}] - ${el.name}`}
                secondary={`${el.year} ${el.user}`}
            />
            <ListItemSecondaryAction style={{display: "flex"}}>
                <WarningData keys={keys} el={el}/>
                {
                    (filters === false) && <IconButton onClick={() => handlerRefills(el)}>
                        <PlaylistAddIcon/>
                    </IconButton>

                }


            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default MiniCardTechnic