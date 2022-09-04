import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import coursesReducer from "./reducer/coursesReducer";


const rootReducer = combineReducers({
    course: coursesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));