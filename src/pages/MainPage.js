import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Notes from "../components/Notes";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { updateNoteAction, deleteNoteAction, addNoteAction } from "../redux/actions/notes";
import AddNoteBtn from "../components/btn/AddNoteBtn";
import Categories from "../components/Categories";


const MainPage = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const notes = useSelector(({notes}) => notes);

    const categories = {
        1: {
            id: 1,
            title: 'Tasks',
            countActive: 12,
            countArchived: 1
        },
    };
    // console.log('notes', notes);

    const addNote = (item) => {
        addNoteAction(dispatch, item)
    }

    const updateNote = (item) => {
        updateNoteAction(dispatch, item)
    }

    const deleteNote = (item) => {
        deleteNoteAction(dispatch, item)
    }

    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Paper style={{width: '90%', padding: '30px 30px 50px 30px'}}>
                    <Notes items={Object.values(notes)} updateItem={updateNote} deleteItem={deleteNote} />
                    <div className={classes.btnContainer} >
                        <AddNoteBtn addItem={addNote} />
                    </div>
                    <Categories items={Object.values(categories)} />
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