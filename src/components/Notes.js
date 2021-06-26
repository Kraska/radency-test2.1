import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";

import NotesItem from "./NotesItem";


const Notes = ({ items, updateItem, deleteItem }) => {

    const classes = useStyles();

    return (
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell size="small" padding="checkbox"/>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Category</TableCell>
                        <TableCell align="left">Content</TableCell>
                        <TableCell align="left">Dates</TableCell>
                        <TableCell align="left" padding="checkbox"/>
                        <TableCell align="left" padding="checkbox"/>
                        <TableCell align="left" padding="checkbox"/>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {items.map(item => (
                            <NotesItem
                                key={item.id}
                                item={item}
                                updateItem={updateItem}
                                deleteItem={deleteItem}
                            />))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}


const useStyles = makeStyles({
    table: {
        width: '100%',
        // maxWidth: '90%',
        // align: 'center',
    },
});

export default Notes;