import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import {TableCell, TableRow} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import EditNoteDialog from "./EditNoteDialog";


const NotesItem = ({ item }) => {

    // const classes = useStyles();
    const { icon, title, categoryId, content, dates } = item;

    const [modalOpen, setModalOpen] = React.useState(false);
    const openEditForm = () => {
        console.log('openEditForm');
        setModalOpen(true)
    };
    const closeEditForm = () => {
        setModalOpen(false)
    };

    const updateNote = (title) => {
        console.log('new title', title)
    };

    return (
        <TableRow>
            <TableCell align="left">{icon}</TableCell>
            <TableCell align="left">{title}</TableCell>
            <TableCell align="left">{categoryId}</TableCell>
            <TableCell align="left">{content}</TableCell>
            <TableCell align="left">{dates}</TableCell>
            <TableCell align="right" padding="none">
                <EditNoteDialog
                    item={item}
                    open={modalOpen}
                    onClose={closeEditForm}
                    save={updateNote}
                    value={title}
                />
                <IconButton color="primary" onClick={openEditForm}>
                    <EditIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right" padding="none">
                <IconButton color="primary">
                    <ArchiveIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right" padding="none">
                <IconButton color="primary">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

const useStyles = makeStyles({
    // table: {
    // },
});

export default NotesItem;