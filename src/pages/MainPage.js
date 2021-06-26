import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Notes from "../components/Notes";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { updateNoteAction } from "../redux/actions/notes";


const MainPage = () => {

    const classes = useStyles();

    const dispatch = useDispatch()

    const notes = useSelector(({notes}) => notes)

    // console.log('notes', notes);

    const updateItem = (item) => {
        updateNoteAction(dispatch, item)
    }

    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Paper style={{width: '90%', padding: '30px 30px 50px 30px'}}>
                    <Notes items={Object.values(notes)} updateItem={updateItem} />
                </Paper>
            </div>
            <Footer />
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        // minWidth: '90%',
        // maxWidth: '90%',
        display: 'flex',
        justifyContent: 'center',
    }
});

export default MainPage;