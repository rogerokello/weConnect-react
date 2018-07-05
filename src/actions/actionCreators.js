import * as types from "./actionTypes";
import {
    begin, // The action value if a "long" running task begun
    end, // The action value if a "long" running task ended
    pendingTask
} from 'react-redux-spinner';

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

export const resetPassword = (data) => {
    return {
        type: types.RESET_PASSWORD,
        payload:data
    };
};

export const startDataFetch = () => {
    return {
        type: types.START_FETCHING_DATA,
        [ pendingTask ]: begin
    }
}

export const stopDataFetch = () => {
    return {
        type: types.STOP_FETCHING_DATA,
        [ pendingTask ]: end
    }
}

export const clearDeleteMessageStatus = () => {
    return {
        type: types.CLEAR_DELETE_MESSAGE,
        payload: {
            "message":"",
            "status":""
        }
    }
}

export const clearEditMessageStatus = () => {
    return {
        type: types.CLEAR_EDIT_MESSAGE,
        payload: {
            "message":"",
            "status":""
        }
    }
}

export const clearNewBusinessMessageStatus = () => {
    return {
        type: types.CLEAR_NEW_BUSINESS_MESSAGE,
        payload: {
            "message":"",
            "status":""
        }
    }
}

export const clearReviewList = () => {
    return {
        type: types.CLEAR_REVIEW_LIST,
        payload: {
            "message":"",
            "status":""
        }
    }
}

export const clearLoginMessages = () => {
    return {
        type: types.CLEAR_LOGIN_MESSAGES,
        payload: {
            "message":"",
            "status":""
        }
    }
}

export const clearSignUpMessages = () => {
    return {
        type: types.CLEAR_SIGNUP_MESSAGES,
        payload: {
            "message":"",
            "status":""
        }
    }
}

export const clearReviewMessages = () => {
    return {
        type: types.CLEAR_NEW_REVIEW_MESSAGE,
        payload: {
            "message":"",
            "status":""
        }
    }
}

