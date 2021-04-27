import {TextField, Typography} from "@material-ui/core";

import s from './Status.module.scss'
import {useEffect, useState} from "react";

const Status = ({id, statusGlobal, updateStatus, getStatus}) => {
    useEffect(() => {
        (async () => {
            await getStatus(id);
        })();
    }, [getStatus, id]);

    let [editMode, setEditMode] = useState(true)
    let [status, setStatus] = useState({statusGlobal})
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditMode(false)
    }
    const deactivateEditMode = () => {
        setEditMode(true)
        updateStatus(status)
    }

    return (
        <div className={s.status}>
            {
                editMode
                    ? <Typography
                        variant="body1"
                        component="p"
                        gutterBottom
                        className={s.status__text}
                        color="textSecondary"
                        onDoubleClick={activateEditMode}
                    >
                        {statusGlobal}
                    </Typography>
                    : <TextField
                    fullWidth
                        autoFocus
                        type="text"
                        onChange={onChangeStatus}
                        onBlur={deactivateEditMode}
                        defaultValue={statusGlobal}
                    />
            }
        </div>
    )
}

export default Status