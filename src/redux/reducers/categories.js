import {
    INCREASE_ACTIVE,
    INCREASE_ARCHIVED,
    DECREASE_ACTIVE,
    DECREASE_ARCHIVED
} from "../types";

const createData = (id, icon, title, countActive, countArchived) =>
    ({ id, icon, title, countActive, countArchived });


const initialState = {
    1: createData(1, '', 'Tasks', 2, 0),
    2: createData(2, '', 'Ideas', 1, 0),
};

export const categoriesReducer = (state = initialState, action) => {

    const { type, payload } = action;

    const id = payload && payload.category && payload.category.id;

    switch (type) {
        case INCREASE_ACTIVE:
            return {...state, [id]: {...state[id], countActive: state[id].countActive++}};
        case INCREASE_ARCHIVED:
            return {...state, [id]: {...state[id], countArchived: state[id].countArchived++}};
        case DECREASE_ACTIVE:
            return {...state, [id]: {...state[id], countActive: state[id].countActive--}};
        case DECREASE_ARCHIVED:
            return {...state, [id]: {...state[id], countArchived: state[id].countArchived--}};
        default:
            return state;
    }
};