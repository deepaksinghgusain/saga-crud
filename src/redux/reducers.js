import {
    CREATE_USER_ERROR,
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    DELETE_USER_ERROR,
    DELETE_USER_START,
    LOAD_USER_ERROR,
    LOAD_USER_START,
    LOAD_USER_SUCCESS
} from "./actionTypes";

const initialState = {
    users: [],
    loading: false,
    err: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_START:
        case CREATE_USER_START:
        case DELETE_USER_START:
            return {
                ...state,
                loading: true
            }

        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false
            }

        case LOAD_USER_ERROR:
        case CREATE_USER_ERROR:
        case DELETE_USER_ERROR:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }

        default:
            return state;
    }
}

export default usersReducer;