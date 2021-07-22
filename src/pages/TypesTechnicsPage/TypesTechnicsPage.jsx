import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {Link, withRouter} from "react-router-dom";
import WifiIcon from '@material-ui/icons/Wifi';
import {List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader} from "@material-ui/core";
import {DeleteOutline} from "@material-ui/icons";

const TypesTechnicsPage = ({getTypes, deleteType, addType, types}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => addType(data);
    useEffect(() => {
        getTypes()
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("type")} defaultValue="type"/>
                <input {...register("name")} defaultValue="name"/>
                <input type="submit"/>
            </form>
            {types.length === 0
                ? <div>
                    <h2>Типов техники нет, введи выше</h2>
                </div>
                : ""}
            <List subheader={<ListSubheader>Settings</ListSubheader>}>
                {types.map(el => {
                        return <ListItem component={Link} to={`/types/${el.type}`} key={el.id}>
                            <ListItemIcon>
                                <WifiIcon/>
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-wifi" primary={el.name}/>
                            <ListItemSecondaryAction>
                                <DeleteOutline onClick={() => deleteType(el.id)}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                    }
                )}
            </List>
        </div>
    )
}

export default withRouter(TypesTechnicsPage)