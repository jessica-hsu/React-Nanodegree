import {GET_USERS, ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER} from '../actions/users';

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {...state, ...action.users};
        case ADD_QUESTION_TO_USER:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat(action.qId)
                }
            }
        case ADD_ANSWER_TO_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qId]: action.answer
                    }
                }
            }
        default:
            return state;
    }
}