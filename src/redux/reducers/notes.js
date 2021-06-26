

const createData = (id, icon, title, categoryId, content, dates, isArchived) =>
    ({ id, icon, title, categoryId, content, dates, isArchived });


const initialState = {
    1: createData(1, '', 'Shopping list', 1, 'content', [], false),
    2: createData(2, '', 'The theory of evolution', 2, 'content', [], false),
    3: createData(3, '', 'New future', 3, 'content', [], false),
    4: createData(4, '', 'Books', 1, 'content', [], false),
};

export const notesReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case 'ADD_NOTE':
            return {...state, [payload.note.id]: payload.note};
        case 'UPDATE_NOTE':
            return {...state, [payload.note.id]: payload.note};
        case 'REMOVE_NOTE':
            return Object.values(state)
                .filter(item => item.id !== payload.id)
                .reduce((notes, item) => {
                    notes[item.id] = item;
                    return notes
                }, {});
        default:
            return state;
    }
};