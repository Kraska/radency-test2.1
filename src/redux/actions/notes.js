import {UPDATE_NOTE} from "../types";


export const updateNoteAction = (dispatch, item) => {
    dispatch({ type: UPDATE_NOTE, payload: {note: item}} );
}