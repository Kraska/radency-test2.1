import DeleteNoteDialog from "../dialog/DeleteNoteDialog";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

const DeleteNoteBtn = ({ item, deleteItem }) => {

    const [modalOpen, setModalOpen] = React.useState(false);
    const openDialog = () => {
        setModalOpen(true)
    };
    const closeDialog = () => {
        setModalOpen(false)
    };

    return (
        <>
            <DeleteNoteDialog
                item={item}
                open={modalOpen}
                onClose={closeDialog}
                remove={deleteItem}
            />
            <IconButton color="primary"  onClick={openDialog}>
                <DeleteIcon />
            </IconButton>
        </>
    )
}

export default DeleteNoteBtn;