import { CREATE_USER, LOAD, SET_AUTHENTICATED, UPDATE_USER, VERIFY_USER } from "./types";

export function userReducer(state = {}, action) {
    console.log(state)
    switch (action.type) {
        case SET_AUTHENTICATED:
            console.log(action.payload)
            return { ...state, isAuth: action.payload };
        case CREATE_USER:
            console.log(action)
            return { ...state, currUser: action.payload };
        case UPDATE_USER:
            return { ...state, currUser: action.payload };
        case LOAD:
            return { ...state, loadUser: action.payload };
        case VERIFY_USER:
            console.log(state)
            return {...state}
        default:
            return state;
    }
}

