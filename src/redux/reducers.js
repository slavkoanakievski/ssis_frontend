import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import coursesReducer from "./reducer/coursesReducer";
import examReducer from "./reducer/examReducer";


const rootReducer = combineReducers({
    course: coursesReducer,
    exam: examReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));