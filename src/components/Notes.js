import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";

import NotesItem from "./NotesItem";


function createData(icon, title, categoryId, content, dates, isArchived) {
    return { icon, title, categoryId, content, dates, isArchived };
}

const rows = [
    createData('', 'Shopping list', 1, 'content', [], false),
    createData('', 'The theory of evolution', 2, 'content', [], false),
    createData('', 'New future', 3, 'content', [], false),
    createData('', 'Books', 1, 'content', [], false),
];

const Notes = () => {

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
                        {rows.map(row => <NotesItem key={row.title} item={row} />)}
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