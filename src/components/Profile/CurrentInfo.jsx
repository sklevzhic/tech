import React, {useEffect, useState} from "react";

const CurrentInfo = ({statusGlobalState, updateStatus}) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(statusGlobalState);
    useEffect(() => {
        setStatus(statusGlobalState)
    }, [statusGlobalState]);

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false);
    }
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
        updateStatus(e.currentTarget.value)
    }


    return (
        <>
            {
                editMode
                    ? <input
                        autoFocus={true}
                        onChange={onChangeStatus}
                        onBlur={deactivateMode}
                        type="text"
                        defaultValue={status}/>
                    : <span onDoubleClick={activateMode}
                            className="card-subtitle">{statusGlobalState || "статуса нет"} </span>
            }

        </>
    )
}

export default CurrentInfo