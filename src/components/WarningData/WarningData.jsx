import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import {IconButton, Popover, Tooltip} from "@material-ui/core";
import React from 'react';

const WarningData = ({keys,el}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return <>
        <IconButton  onClick={handleClick}>
            <ReportProblemIcon/>
        </IconButton>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <div>
                {Object.keys(keys).map(key => {
                    if (!el[keys[key].key]) {
                        return <Tooltip key={key} title={keys[key].name}><span style={{
                            display: "block",
                            width: "10px",
                            textAlign: "center",
                            color: "white",
                            marginRight: "2px",
                            background: keys[key].bg
                        }}>!</span></Tooltip>
                    }
                })}
            </div>
        </Popover>
    </>

}

export default WarningData

