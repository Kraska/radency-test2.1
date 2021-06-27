import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Notes from "../components/Notes";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { updateNoteAction, deleteNoteAction, addNoteAction } from "../redux/actions/notes";
import Button from "@material-ui/core/Button";
import AddNoteBtn from "../components/btn/AddNoteBtn";


const MainPage = () => {

    const classes = useStyles();

    const dispatch = useDispatch()

    const notes = useSelector(({notes}) => notes)

    // console.log('notes', notes);

    const addItem = (item) => {
        addNoteAction(dispatch, item)
    }

    const updateItem = (item) => {
        updateNoteAction(dispatch, item)
    }

    const deleteItem = (item) => {
        deleteNoteAction(dispatch, item)
    }

    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Paper style={{width: '90%', padding: '30px 30px 50px 30px'}}>
                    <Notes items={Object.values(notes)} updateItem={updateItem} deleteItem={deleteItem} />
                    <div className={classes.btnContainer} >
                        <AddNoteBtn addItem={addItem} />
                    </div>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    btnContainer: {
        padding: 20,
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

export default MainPage;