import {FETCH_COURSE, FETCH_COURSES} from "../actionTypes";
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
}