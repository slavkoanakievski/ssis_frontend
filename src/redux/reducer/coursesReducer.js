import {FETCH_COURSE, FETCH_COURSES} from "../actionTypes";

const initialState = {
    courses: [],
    course: {}
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES: {
            return {
                ...state,
                courses: action.courses
            }
        }
        case FETCH_COURSE: {
            return {
                ...state,
                course: action.course
            }
        }
        default:
            return state
    }
}
export default reducer;