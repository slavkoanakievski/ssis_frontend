import {
    ADD_QUESTION_FORUM,
    FETCH_COURSE,
    FETCH_COURSES,
    FETCH_QUESTIONS,
    FETCH_QUIZ,
    FETCH_QUIZZES,
    USER_LOGIN
} from "../actionTypes";
import axios from "../../axios/axiosInstance";


export const coursesAction = {
    fetchCourses: () => dispatch => {
        axios.get("/courses").then(resp => {
            dispatch({
                type: FETCH_COURSES,
                courses: resp.data
            })
        })
    },
    fetchCourse: (id) => dispatch => {
        axios.get(`/courses/${id}`).then(resp => {
            dispatch({
                type: FETCH_COURSE,
                course: resp.data
            })
        })
    },
    fetchQuizzes: () => dispatch => {
        axios.get("/quizzes").then(resp => {
            dispatch({
                type: FETCH_QUIZZES,
                quizzes: resp.data
            })
        })
    },
    fetchQuiz: (id) => dispatch => {
        axios.get(`/quizzes/${id}`).then(resp => {
            dispatch({
                type: FETCH_QUIZ,
                quiz: resp.data
            })
        })
    },
    fetchQuestions: () => dispatch => {
        axios.get("/questions").then(resp => {
            dispatch({
                type: FETCH_QUESTIONS,
                questions: resp.data
            })
        })
    },
    addQuestion(payload) {
        return {
            type: ADD_QUESTION_FORUM,
            question: payload
        }
    },
}