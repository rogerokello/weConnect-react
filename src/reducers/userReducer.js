import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER } from "../actions/actionTypes";

const initialState = {
	signUpMessage:{},
	signInMessage:{},
	logOutMessage:{},
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
	default:
		return state;
	}
};