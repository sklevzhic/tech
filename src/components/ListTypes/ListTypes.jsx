import {
    Button, Dialog, DialogActions, DialogContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader, TextField
} from "@material-ui/core";
import {Link} from "react-router-dom";
import WifiIcon from "@material-ui/icons/Wifi";
import {DeleteOutline} from "@material-ui/icons";
import React, {useEffect} from "react";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {makeStyles} from '@material-ui/core/styles';
import Modal from "../Modal";
import {useForm} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ListTypes = ({types, deleteType, getTypes, addType}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const {register, handleSubmit} = useForm();
    const onSubmit = data => addType(data);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        getTypes()
    }, [])
    return (
        <>
            {types &&
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
            }
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<CloudUploadIcon/>} onClick={handleClickOpen}>
                Добавить тип
            </Button>

            <Modal open={open} handleClose={handleClose} title={"Добавить тип"}>
                <form onSubmit={handleSubmit(onSubmit)}>

                <DialogContent>
                        <TextField {...register("type")} defaultValue="type"/>
                        <TextField {...register("name")} defaultValue="name"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
                </form>


            </Modal>
        </>
    )
}

export default ListTypes

