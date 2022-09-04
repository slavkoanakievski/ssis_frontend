import {FETCH_COURSE, FETCH_COURSES, FETCH_QUIZ, FETCH_QUIZZES} from "../actionTypes";

const initialState = {
    courses: [],
    course: {},
    quizzes: [],
    quiz: {}
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
        case FETCH_QUIZZES: {
            return {
                ...state,
                quizzes: action.quizzes
            }
        }
        case FETCH_QUIZ: {
            return {
                ...state,
                quiz: action.quiz
            }
        }
        default:
            return state
    }
}
export default reducer;