import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const Categories = ({ items }) => {

    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell size="small" padding="checkbox"/>
                        <TableCell align="left">Note Category</TableCell>
                        <TableCell align="left">Active</TableCell>
                        <TableCell align="left">Archived</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(({ icon, title, countActive, countArchived }) => (
                        <TableRow>
                            <TableCell align="left">{icon}</TableCell>
                            <TableCell align="left">{title}</TableCell>
                            <TableCell align="left">{countActive}</TableCell>
                            <TableCell align="left">{countArchived}</TableCell>
                        </TableRow>))}
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


export default Categories;