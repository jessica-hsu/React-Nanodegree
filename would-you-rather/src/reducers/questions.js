import {GET_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER} from '../actions/questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {...state, ...action.questions};
        case ADD_QUESTION:
            const {question} = action;
            return {
                ...state,
                [question.id]: question
            }
        case SAVE_QUESTION_ANSWER:
            console.log(state);
            console.log(action);
            return {
                ...state
            }
        default:
            return state;
    }
}