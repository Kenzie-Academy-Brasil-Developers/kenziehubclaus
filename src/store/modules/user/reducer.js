import { CREATE_USER, LOAD, SET_AUTHENTICATED, UPDATE_USER } from "./types";

export function userReducer(state = {}, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return { ...state, isAuth: action.payload };
        case CREATE_USER:
            return { ...state, currUser: action.payload };
        case UPDATE_USER:
            return { ...state, currUser: action.payload };
        case LOAD:
            return { ...state, loadUser: action.payload };
        default:
            return state;
    }
}