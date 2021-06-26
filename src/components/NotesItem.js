import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import {TableCell, TableRow} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import EditNoteDialog from "./dialog/EditNoteDialog";
import DeleteNoteDialog from "./dialog/DeleteNoteDialog";


const NotesItem = ({ item, updateItem, deleteItem }) => {

    // const classes = useStyles();
    const { icon, title, categoryId, content, dates } = item;

    const [editModalOpen, setEditModalOpen] = React.useState(false);
    const openEditForm = () => {
        setEditModalOpen(true)
    };
    const closeEditForm = () => {
        setEditModalOpen(false)
    };

    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
    const openDeleteForm = () => {
        setDeleteModalOpen(true)
    };
    const closeDeleteForm = () => {
        setDeleteModalOpen(false)
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
                    open={editModalOpen}
                    onClose={closeEditForm}
                    save={updateItem}
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
                <DeleteNoteDialog
                    item={item}
                    open={deleteModalOpen}
                    onClose={closeDeleteForm}
                    remove={deleteItem}
                />
                <IconButton color="primary"  onClick={openDeleteForm}>
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