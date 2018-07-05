import * as actions from "../actions/actionCreators";
import * as types from "../actions/actionTypes";
import {
    begin, // The action value if a "long" running task begun
    end, // The action value if a "long" running task ended
    pendingTask
} from 'react-redux-spinner';

describe('actions', () => {
    it('should create a business', () => {
        const data = {"message": "new business"}

        const expectedAction = {
            type: types.ADD_BUSINESS,
            payload: data
        }

        expect(actions.createBusiness(data)).toEqual(expectedAction)
    });
    it('should remove a business', () => {
        const data = {"message": "new business"}
        const businessId = 1

        const expectedAction = {
            type: types.DELETE_BUSINESS,
            payload: data,
            id: businessId
        }

        expect(actions.removeBusiness(data, businessId)).toEqual(expectedAction)
    });
    it('should update a business', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.EDIT_BUSINESS,
            payload: data
        }

        expect(actions.updateBusiness(data)).toEqual(expectedAction)
    });
    it('should get all businesses', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.GET_ALL_BUSINESS,
            payload: data
        }

        expect(actions.extractAllBusinesses(data)).toEqual(expectedAction)
    });
    it('should get one businesses', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.GET_ONE_BUSINESS,
            payload: data
        }

        expect(actions.extractOneBusiness(data)).toEqual(expectedAction)
    });
    it('should search for businesses', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.SEARCH_FOR_BUSINESS,
            payload: data
        }

        expect(actions.searchForBusinesses(data)).toEqual(expectedAction)
    });
    it('should create a review', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.ADD_REVIEW,
            payload: data
        }

        expect(actions.createReview(data)).toEqual(expectedAction)
    });
    it('should get all reviews', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.GET_ALL_REVIEWS,
            payload: data
        }

        expect(actions.findAllReviews(data)).toEqual(expectedAction)
    });
    it('should get all reviews', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.GET_ALL_REVIEWS,
            payload: data
        }

        expect(actions.findAllReviews(data)).toEqual(expectedAction)
    });
    it('should logout user', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.LOGOUT_USER,
            payload: data
        }

        expect(actions.logOutUser(data)).toEqual(expectedAction)
    });
    it('should signup user', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.SIGNUP_USER,
            payload: data
        }

        expect(actions.signUpUser(data)).toEqual(expectedAction)
    });
    it('should signup user', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.SIGNUP_USER,
            payload: data
        }

        expect(actions.signUpUser(data)).toEqual(expectedAction)
    });
    it('should signin user', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.LOGIN_USER,
            payload: data
        }

        expect(actions.loginUser(data)).toEqual(expectedAction)
    });
    it('should start data fetch', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.START_FETCHING_DATA,
            [ pendingTask ]: begin
        }

        expect(actions.startDataFetch()).toEqual(expectedAction)
    });
    it('should stop data fetch', () => {
        const data = {"message": "new business"};

        const expectedAction = {
            type: types.STOP_FETCHING_DATA,
            [ pendingTask ]: end
        }

        expect(actions.stopDataFetch()).toEqual(expectedAction)
    });
    it('should clear delete message status', () => {
        const data = {
            "message":"",
            "status":""
        };

        const expectedAction = {
            type: types.CLEAR_DELETE_MESSAGE,
            payload: data
        }

        expect(actions.clearDeleteMessageStatus()).toEqual(expectedAction)
    });
    it('should clear edit message status', () => {
        const data = {
            "message":"",
            "status":""
        };

        const expectedAction = {
            type: types.CLEAR_EDIT_MESSAGE,
            payload: data
        }

        expect(actions.clearEditMessageStatus()).toEqual(expectedAction)
    });
    it('should clear edit message status', () => {
        const data = {
            "message":"",
            "status":""
        };

        const expectedAction = {
            type: types.CLEAR_NEW_BUSINESS_MESSAGE,
            payload: data
        }

        expect(actions.clearNewBusinessMessageStatus()).toEqual(expectedAction)
    });
    
    

});