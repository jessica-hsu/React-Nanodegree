export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(id) {
    console.log('SETTING AUTHED', id);
    return {
        type: SET_AUTHED_USER,
        id
    }
}
