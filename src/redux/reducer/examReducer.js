import {GET_EXAM, SELECT_QUESTION} from "../actionTypes";
import {replaceObj} from "../../utils/utils";


const initialState = {
    exam: {},
    answers: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXAM: {
            return {
                ...state,
                exam: action.exam,
                answers: action.exam.questions.map((ques) => ({id: ques.id, answer: 0}))
            }
        }
        case SELECT_QUESTION: {
            let old_quest = state.answers.find((ans) => ans.id === action.questionId);
            let new_quest = {id: action.questionId, answer: parseInt(action.answer)};
            return {
                ...state,
                answers: replaceObj(new_quest, old_quest, state.answers)
            }
        }
        default:
            return state
    }
}
export default reducer