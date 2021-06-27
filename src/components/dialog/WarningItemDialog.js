import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {makeStyles} from "@material-ui/core/styles";



const WarningItemDialog = ({ text, open, onClose, onConfirm }) => {

    const handleConfirm = (e) => {
        e.preventDefault();
        onConfirm();
        onClose();
    };


    const classes = useStyles();

    return (
        <Dialog onClose={onClose} open={open}>
            <form className={classes.container} noValidate autoComplete="off">
                <div>{text}</div>
                <div className={classes.dialogWrapper}>
                    <Button onClick={onClose} variant="contained" color="primary" className={classes.button}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} variant="contained" color="primary" className={classes.button}>
                        Confirm
                    </Button>
                </div>
            </form>
        </Dialog>
    );
};

const useStyles = makeStyles({
    container: {
        // padding: theme.spacing(2),
        padding: 40,
    },
    dialogWrapper: {
        // marginTop: theme.spacing(1),
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        minWidth: 100,
    },
    textField: {
        width: '100%',
    },
});

export default WarningItemDialog;