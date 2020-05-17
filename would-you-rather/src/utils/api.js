import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from './_DATA';

export function getInitialData() {
 return Promise.all([
     _getQuestions(),
     _getUsers(),
 ]).then(([questions, users]) => ({
    users,
    questions
 }));
}