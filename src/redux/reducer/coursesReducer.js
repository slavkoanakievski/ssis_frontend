import {
    ADD_QUESTION_FORUM,
    FETCH_COURSE,
    FETCH_COURSES,
    FETCH_QUESTIONS,
    FETCH_QUIZ,
    FETCH_QUIZZES
} from "../actionTypes";

const initialState = {
    courses: [],
    course: {},
    quizzes: [],
    quiz: {},
    questions: []
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
        case FETCH_QUESTIONS: {
            return {
                ...state,
                questions: action.questions
            }
        }
        case FETCH_QUIZ: {
            return {
                ...state,
                quiz: action.quiz
            }
        }
        case ADD_QUESTION_FORUM: {
            let newQuestions = {questionForumText: action.question.questionText, datePosted: new Date().toLocaleString(), answers: [], id: Math.random(),  formattedDatePublished: new Date().toLocaleString() }
            let questions = state.questions;
            questions.push(newQuestions)
            return  {
                ...state,
                questions: questions
            }
        }
        default:
            return state
    }
}
export default reducer;