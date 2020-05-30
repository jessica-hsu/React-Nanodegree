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
    console.log('SAVE ANSWER', authedUser);
    console.log('SAVE ANSWER', qId);
    console.log('SAVE ANSWER', answer);
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qId,
        answer
    }
}

export function handleSaveQuestionAnswer(qid, answer) {
    console.log('ACTION', qid);
    console.log('ANSWER', answer);
    return function(dispatch, getState) {
        const { authedUser } = getState();
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(function() {
            dispatch(saveAnswer(authedUser, qid, answer));
            //dispatch(addQuestionToUser(question));
        });
      };
}