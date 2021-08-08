import React from "react";
import {
    Dialog,
    DialogTitle,
} from "@material-ui/core";

const Modal = ({open, handleClose, title, children}) => {
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                {children}
            </Dialog>
        </div>
    );
}

export default Modal