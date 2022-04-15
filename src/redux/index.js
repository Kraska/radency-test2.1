import { combineReducers, createStore } from 'redux'

import { notesReducer } from './reducers/notes'
import { categoriesReducer } from './reducers/categories'


const rootReducer = combineReducers({
    notes: notesReducer,
    categories: categoriesReducer,
})

export default createStore(rootReducer)
