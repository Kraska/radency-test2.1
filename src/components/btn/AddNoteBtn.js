import React from "react";
import EditNoteDialog from "../dialog/EditNoteDialog";
import Button from "@material-ui/core/Button";

const AddNoteBtn = ({ addItem }) => {

    const [modalOpen, setModalOpen] = React.useState(false);
    const openDialog = () => {
        setModalOpen(true)
    };
    const closeDialog = () => {
        setModalOpen(false)
    };

    return (
        <>
            <EditNoteDialog
                item={{ title: '', content: '' }}
                open={modalOpen}
                onClose={closeDialog}
                save={addItem}
            />
            <Button onClick={openDialog} variant="contained" color="primary">
                Create note
            </Button>
        </>
    )
};

export default AddNoteBtn;