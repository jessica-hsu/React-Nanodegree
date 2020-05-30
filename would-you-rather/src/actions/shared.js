import {getInitialData} from '../utils/api';
import {getQuestions} from './questions';
import {getUsers} from './users';
//import {setAuthedUser} from './authUser';


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(getQuestions(questions));
            dispatch(getUsers(users));
            //dispatch(setAuthedUser(AUTHED_USER_ID));
        })
    }
}