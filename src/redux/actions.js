import {
    CREATE_USER_ERROR,
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    DELETE_USER_ERROR,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    LOAD_USER_ERROR,
    LOAD_USER_START,
    LOAD_USER_SUCCESS
} from "./actionTypes";

export const loadUsersStart = () => ({
    type: LOAD_USER_START
})

export const loadUsersSuccess = (users) => ({
    type: LOAD_USER_SUCCESS,
    payload: users
})

export const loadUsersError = (error) => ({
    type: LOAD_USER_ERROR,
    payload: error
})

export const createUsersStart = (user) => ({
    type: CREATE_USER_START,
    payload: user
})

export const createUsersSuccess = () => ({
    type: CREATE_USER_SUCCESS
})

export const createUsersError = (error) => ({
    type: CREATE_USER_ERROR,
    payload: error
})

export const deleteUsersStart = (userId) => ({
    type: DELETE_USER_START,
    payload: userId
})

export const deleteUsersSuccess = (userId) => ({
    type: DELETE_USER_SUCCESS,
    payload: userId
})

export const deleteUsersError = (error) => ({
    type: DELETE_USER_ERROR,
    payload: error
})
