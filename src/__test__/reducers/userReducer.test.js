import reducer from '../../Reducers/userReducer';

import {
    SIGNUP_USER,
	LOGIN_USER,
	LOGOUT_USER, 
	CLEAR_LOGIN_MESSAGES, 
	CLEAR_LOGOUT_MESSAGES, 
	RESET_PASSWORD 
} from '../../Actions/actionTypes';

describe('ADD_BUSINESS Reducer', ()=>{
    let user;
    let initialState;

    beforeEach(() => {
        user = { user_name: "Good"};
        initialState = { 
            signUpMessage:{},
	        signInMessage:{},
	        logOutMessage:{},
	        resetPasswordMessage:{}
        };
    });

    it("has initial state", () => {
        expect(reducer(undefined, {})).toEqual({ 
            signUpMessage:{},
	        signInMessage:{},
	        logOutMessage:{},
	        resetPasswordMessage:{} });
    });

    it("should handle SIGNUP_USER ", () => {
        expect(
            reducer(initialState, {
            type: SIGNUP_USER,
            payload: user
            })
        ).toEqual({
            signUpMessage:user,
	        signInMessage:{},
	        logOutMessage:{},
	        resetPasswordMessage:{} 
        });
    });
    it("should handle LOGIN_USER ", () => {
        expect(
            reducer(initialState, {
            type: LOGIN_USER,
            payload: user
            })
        ).toEqual({
            signUpMessage:{},
	        signInMessage:user,
	        logOutMessage:{},
	        resetPasswordMessage:{},
        });
    });
    it("should handle LOGOUT_USER ", () => {
        expect(
            reducer(initialState, {
            type: LOGOUT_USER,
            payload: user
            })
        ).toEqual({
            signUpMessage:{},
	        signInMessage:{},
	        logOutMessage:user,
	        resetPasswordMessage:{}
        });
    });
    
    it("should handle CLEAR_LOGIN_MESSAGES ", () => {
        expect(
            reducer(initialState, {
            type: CLEAR_LOGIN_MESSAGES,
            payload: user
            })
        ).toEqual({
            signUpMessage:{},
	        signInMessage:user,
	        logOutMessage:{},
	        resetPasswordMessage:{}
        });
    });

    it("should handle CLEAR_LOGOUT_MESSAGES ", () => {
        expect(
            reducer(initialState, {
            type: CLEAR_LOGOUT_MESSAGES,
            payload: user
            })
        ).toEqual({
            signUpMessage:{},
	        signInMessage:{},
	        logOutMessage:user,
	        resetPasswordMessage:{}
        });
    });

    it("should handle RESET_PASSWORD ", () => {
        expect(
            reducer(initialState, {
            type: RESET_PASSWORD,
            payload: user
            })
        ).toEqual({
            signUpMessage:{},
	        signInMessage:{},
	        logOutMessage:{},
	        resetPasswordMessage:user
        });
    });

});