import {SELECT_QUESTION, GET_EXAM} from "../actionTypes";
import axios from "../../axios/axiosInstance";

export const examAction = {
    changeAnswer: (questionId, answer) => {
        return {
            type: SELECT_QUESTION,
            questionId: questionId,
            answer: answer
        }
    },
    getExam: (id) => dispatch => {
        axios.get(`/courses/exams/${id}`).then(resp => {
            dispatch({
                type: GET_EXAM,
                exam: resp.data
            })
        })
    },
    finishExam: (answers, id , callback) => {
        axios.post(`/courses/exam/${id}/submit`, answers)
            .then(resp => {
                callback(resp.data);
            })
    }

}