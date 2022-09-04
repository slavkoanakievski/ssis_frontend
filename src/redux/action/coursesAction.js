import {FETCH_COURSE, FETCH_COURSES, FETCH_QUIZ, FETCH_QUIZZES} from "../actionTypes";
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
}