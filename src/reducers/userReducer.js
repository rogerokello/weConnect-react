import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER, CLEAR_LOGIN_MESSAGES, CLEAR_LOGOUT_MESSAGES, RESET_PASSWORD } from "../actions/actionTypes";

const initialState = {
	signUpMessage:{},
	signInMessage:{},
	logOutMessage:{},
	resetPasswordMessage:{}
};

export default (state = initialState, action)=>{
	switch(action.type){
	case SIGNUP_USER:
		return {...state, 
			signUpMessage: action.payload};
	case LOGIN_USER:
		return {...state, 
			signInMessage: action.payload};
	case LOGOUT_USER:
		return {...state, 
			logOutMessage: action.payload};
	case CLEAR_LOGIN_MESSAGES:
		return {...state, 
			signInMessage: action.payload};
	case CLEAR_LOGOUT_MESSAGES:
		return {...state, 
			logOutMessage: action.payload};
	case RESET_PASSWORD:
			return {...state, 
				resetPasswordMessage: action.payload
			};
	default:
		return state;
	}
};