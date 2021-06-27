import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../types";
import { v4 as uuid } from 'uuid';

export const addNoteAction = (dispatch, item) => {
    const newItem = {...item, id: uuid.v4(), categoryId: 1};
    // console.log('newItem', newItem);
    dispatch({ type: ADD_NOTE, payload: {note: newItem}});
};

export const updateNoteAction = (dispatch, item) => {
    dispatch({ type: UPDATE_NOTE, payload: {note: item}} );
};

export const deleteNoteAction = (dispatch, item) => {
    dispatch({ type: DELETE_NOTE, payload: {id: item.id}} );
};