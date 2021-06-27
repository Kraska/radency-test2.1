import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import EditNoteDialog from "../dialog/EditNoteDialog";

const EditNoteBtn = ({ item, updateItem }) => {

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
                item={item}
                open={modalOpen}
                onClose={closeDialog}
                save={updateItem}
            />
            <IconButton color="primary"  onClick={openDialog}>
                <EditIcon />
            </IconButton>
        </>
    )
}

export default EditNoteBtn;