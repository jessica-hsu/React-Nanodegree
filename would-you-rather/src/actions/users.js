// action creator for getting users
export const GET_USERS = 'GET_USERS';
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function addQuestionToUser(question) {
    const author = question.author;
    const qId = question.id;
    return {
        type: ADD_QUESTION_TO_USER,
        author,
        qId
    }
}

export function addAnswerToUser(authedUser, qId, answer) {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qId,
        answer
    }
}