// action creator for getting questions
import { saveQuestion, saveQuestionAnswer} from '../utils/api';
import { addQuestionToUser } from '../actions/users';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return function(dispatch, getState) {
        const { authedUser } = getState();
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        }).then(function(question) {
            dispatch(addQuestion(question));
            dispatch(addQuestionToUser(question));
        });
      };
}

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

function saveAnswer(authedUser, qId, answer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qId,
        answer
    }
}

export function handleSaveQuestionAnswer(qid, answer) {
    return function(dispatch, getState) {
        const { authedUser } = getState();
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(function(user, qId, ans) {
            dispatch(saveAnswer(user, qId, ans));
            //dispatch(addQuestionToUser(question));
        });
      };
}