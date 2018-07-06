import reducer from '../../Reducers/reviewReducer';

import {
    ADD_REVIEW,
    GET_ALL_REVIEWS,
    CLEAR_REVIEW_LIST,
    CLEAR_NEW_REVIEW_MESSAGE
} from '../../Actions/actionTypes';

describe('ADD_BUSINESS Reducer', ()=>{
    let review;
    let initialState;

    beforeEach(() => {
        review = { review_name: "Good"};
        initialState = { 
            reviewMessage:{},
            reviews:{},
        };
    });

    it("has initial state", () => {
        expect(reducer(undefined, {})).toEqual({ 
            reviewMessage:{},
            reviews:{}, });
    });

    it("should handle ADD_REVIEW ", () => {
        expect(
            reducer(initialState, {
            type: ADD_REVIEW,
            payload: review
            })
        ).toEqual({
            reviewMessage:review,
            reviews:{},
        });
    });
    it("should handle GET_ALL_REVIEWS ", () => {
        expect(
            reducer(initialState, {
            type: GET_ALL_REVIEWS,
            payload: review
            })
        ).toEqual({
            reviewMessage:{},
            reviews:review,
        });
    });
    it("should handle CLEAR_REVIEW_LIST ", () => {
        expect(
            reducer(initialState, {
            type: CLEAR_REVIEW_LIST,
            payload: review
            })
        ).toEqual({
            reviewMessage:{},
            reviews:review,
        });
    });
    
    it("should handle CLEAR_NEW_REVIEW_MESSAGE ", () => {
        expect(
            reducer(initialState, {
            type: CLEAR_NEW_REVIEW_MESSAGE,
            payload: review
            })
        ).toEqual({
            reviewMessage:review,
            reviews:{},
        });
    });

});