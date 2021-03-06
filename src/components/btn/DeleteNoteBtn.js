import WarningItemDialog from "../dialog/WarningItemDialog";
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
            <WarningItemDialog
                text={`You are deleting note "${item.title}". Are you sure?`}
                open={modalOpen}
                onClose={closeDialog}
                onConfirm={() => deleteItem(item)}
            />
            <IconButton color="primary" onClick={openDialog}>
                <DeleteIcon />
            </IconButton>
        </>
    )
}

export default DeleteNoteBtn;