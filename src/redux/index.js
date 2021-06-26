import { combineReducers, createStore } from 'redux'

import { notesReducer } from './reducers/notes'


const rootReducer = combineReducers({
    notes: notesReducer,
})

export default createStore(rootReducer)
