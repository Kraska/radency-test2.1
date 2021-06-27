import WarningItemDialog from "../dialog/WarningItemDialog";
import IconButton from "@material-ui/core/IconButton";
import ArchiveIcon from "@material-ui/icons/Archive";
import React from "react";

const ArchiveNoteBtn = ({ item, updateItem }) => {

    const [modalOpen, setModalOpen] = React.useState(false);
    const openDialog = () => {
        setModalOpen(true)
    };
    const closeDialog = () => {
        setModalOpen(false)
    };

    const onConfirm = () => {
        item.iaArchived = true;
        updateItem(item);
    };

    return (
        <>
            <WarningItemDialog
                text={`You are archiving note "${item.title}". Are you sure?`}
                open={modalOpen}
                onClose={closeDialog}
                onConfirm={onConfirm}
            />
            <IconButton color="primary"  onClick={openDialog}>
                <ArchiveIcon />
            </IconButton>
        </>
    )
}

export default ArchiveNoteBtn;