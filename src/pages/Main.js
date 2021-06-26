import React from 'react';

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Notes from "../components/Notes";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const Main = () => {

    const classes = useStyles();

    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Paper style={{width: '90%', padding: '30px 30px 50px 30px'}}>
                    <Notes />
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

export default Main;