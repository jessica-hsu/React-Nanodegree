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
            let obj = {
                ...state,
                [action.qId] : {
                    ...state[action.qId],
                    optionOne: {
                        text: state[action.qId].optionOne.text,
                        votes: state[action.qId].optionOne.votes.concat(action.authedUser)
                    }
                }
            }
            if (action.answer === "optionTwo") {
                obj = {
                    ...state,
                    [action.qId] : {
                        ...state[action.qId],
                        optionTwo: {
                            text: state[action.qId].optionTwo.text,
                            votes: state[action.qId].optionTwo.votes.concat(action.authedUser)
                        }                    
                    }
                }
            } 
            return obj;
        default:
            return state;
    }
}