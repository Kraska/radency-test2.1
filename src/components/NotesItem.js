import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import {TableCell, TableRow} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteNoteBtn from "./btn/DeleteNoteBtn";
import EditNoteBtn from "./btn/EditNoteBtn";


const NotesItem = ({ item, updateItem, deleteItem }) => {

    // const classes = useStyles();
    const { icon, title, categoryId, content, dates } = item;

    return (
        <TableRow>
            <TableCell align="left">{icon}</TableCell>
            <TableCell align="left">{title}</TableCell>
            <TableCell align="left">{categoryId}</TableCell>
            <TableCell align="left">{content}</TableCell>
            <TableCell align="left">{dates}</TableCell>
            <TableCell align="right" padding="none">
                <EditNoteBtn item={item} updateItem={updateItem} />
            </TableCell>
            <TableCell align="right" padding="none">
                <IconButton color="primary">
                    <ArchiveIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right" padding="none">
                <DeleteNoteBtn item={item} deleteItem={deleteItem} />
            </TableCell>
        </TableRow>
    );
};

const useStyles = makeStyles({
    // table: {
    // },
});

export default NotesItem;