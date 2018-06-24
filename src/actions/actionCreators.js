import * as types from "./actionTypes";

export const createBusiness = (data) => {
    return {
        type: types.ADD_BUSINESS,
        payload:data
    };
};

export const removeBusiness = (data, businessId) => {
    return {
        type: types.DELETE_BUSINESS,
        payload:data,
        id:businessId
    };
};

export const updateBusiness = (data) => {
    return {
        type: types.EDIT_BUSINESS,
        payload:data
    };
};

export const changeTokenState = () => {
    return {
        type: types.TOGGLE_CONNECTION_TOKEN_STATE,
        payload: true
    };
};

export const loadBusinesses = () => {
    return {
        type: types.LOADING_BUSINESSES,
        payload: false
    };
};

export const extractAllBusinesses = (data) => {
    return {
        type: types.GET_ALL_BUSINESS,
        payload:data
    };
};

export const extractOneBusiness = (data) => {
    return {
        type: types.GET_ONE_BUSINESS,
        payload:data
    }
}

export const searchForBusinesses = (data) => {
    return {
        type: types.SEARCH_FOR_BUSINESS,
        payload:data
    };
};

export const createReview = (data) => {
    return {
        type: types.ADD_REVIEW,
        payload:data
    };
};

export const findAllReviews = (data) => {
    return {
        type: types.GET_ALL_REVIEWS,
        payload:data
    };
};

export const logOutUser = (data) => {
    return {
        type: types.LOGOUT_USER,
        payload:data
    };
};

export const signUpUser = (data) => {
    return {
        type: types.SIGNUP_USER,
        payload:data
    };
};

export const loginUser = (data) => {
    return {
        type: types.LOGIN_USER,
        payload:data
    };
};

