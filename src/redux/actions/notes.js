import { UPDATE_NOTE, DELETE_NOTE } from "../types";


export const updateNoteAction = (dispatch, item) => {
    dispatch({ type: UPDATE_NOTE, payload: {note: item}} );
};

export const deleteNoteAction = (dispatch, item) => {
    dispatch({ type: DELETE_NOTE, payload: {id: item.id}} );
};