import {GET_USERS, ADD_QUESTION_TO_USER} from '../actions/users';

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {...state, ...action.users};
        case ADD_QUESTION_TO_USER:
            //console.log(action);
            //console.log(state);
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat(action.qId)
                }
            }
        default:
            return state;
    }
}