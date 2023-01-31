import { CREATE_USER, LOAD, SET_AUTHENTICATED, UPDATE_USER, VERIFY_USER } from "./types";



export function setAuth(isAuth) {
    return {
        type: SET_AUTHENTICATED,
        payload: isAuth
    }
}

export function loadingUser(bool) {
    return {
        type: LOAD,
        payload: bool
    }
}

export function createUser(data) {
    return {
        type: CREATE_USER,
        payload: data
    }
}

export function updateUser(data) {
    return {
        type: UPDATE_USER,
        payload: data
    }
}

export function verifyUser() {
    return {
        type: VERIFY_USER
    }
}



