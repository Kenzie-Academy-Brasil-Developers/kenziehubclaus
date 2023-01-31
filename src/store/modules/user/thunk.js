import { createUser, updateUser } from "./actions";

export function createUserThunk(data) {
    return (dispatch, getState) => {
        const { user } = getState();
        const update = {...user, ...data }
        dispatch(createUser(update))
    }
}

export function updateUserThunk(data) {
    return (dispatch, getState) => {
        const { user } = getState();
        const update = {...user, ...data }
        dispatch(updateUser(update))
    }
}