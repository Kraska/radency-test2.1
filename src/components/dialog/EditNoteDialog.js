import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {makeStyles} from "@material-ui/core/styles";



const EditNoteDialog = ({ item, open, onClose, save }) => {

    const [title, setTitle] = React.useState(item.title);
    const [content, setContent] = React.useState(item.content);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleSave = (e) => {
        e.preventDefault();
        item.title = title;
        item.content = content;
        save(item);
        onClose();
    };

    const handleKeyPress = (e) => {
        if(e.charCode === 13) {
            handleSave(e)
        }
    }

    const classes = useStyles();

    return (
        <Dialog onClose={onClose} open={open}>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    autoFocus
                    id="outlined-name"
                    label="Title"
                    className={classes.textField}
                    value={title}
                    onChange={handleChangeTitle}
                    onKeyPress={handleKeyPress}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    multiline
                    rows={4}
                    id="outlined-name"
                    label="Description"
                    className={classes.textField}
                    value={content}
                    onChange={handleChangeContent}
                    // onKeyPress={handleKeyPress}
                    margin="normal"
                    variant="outlined"
                />
                <div className={classes.dialogWrapper}>
                    <Button onClick={handleSave} variant="contained" color="primary" className={classes.button}>
                        Save
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

export default EditNoteDialog;