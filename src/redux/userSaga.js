import { all, call, delay, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { createUsersError, createUsersSuccess, deleteUsersSuccess, loadUsersError, loadUsersSuccess } from './actions';
import { CREATE_USER_START, DELETE_USER_START, LOAD_USER_START } from "./actionTypes";
import { createUsersApi, deleteUsersApi, loadUsersApi } from './api';

export function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        if (response.status == 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data));
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data));
    }
}

export function* onCreateUserStartAsync({ payload }) {
    try {
        const response = yield call(createUsersApi, payload);
        if (response.status == 200) {
            yield put(createUsersSuccess(response.data));
        }
    } catch (error) {
        yield put(createUsersError(error.response.data));
    }
}

export function* onDeleteUserStartAsync({ userId }) {
    try {
        const response = yield call(deleteUsersApi, userId);
        if (response.status == 200) {
            yield put(deleteUsersSuccess(response.data));
        }
    } catch (error) {
        yield put(createUsersError(error.response.data));
    }
}

export function* onLoadUsers() {
    yield takeEvery(LOAD_USER_START, onLoadUsersStartAsync)
}

export function* createLoadUser() {
    yield takeLatest(CREATE_USER_START, onCreateUserStartAsync)
}

export function* deleteLoadUser() {
    yield takeLatest(DELETE_USER_START, onDeleteUserStartAsync)
}

const userSagas = [
    fork(onLoadUsers),
    fork(createLoadUser)
]

export default function* rootSaga() {
    yield all([...userSagas])
}