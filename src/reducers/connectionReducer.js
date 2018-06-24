import { TOGGLE_CONNECTION_TOKEN_STATE } from "../actions/actionTypes";

const initialState = {
    connectionstate:true,
    tokenExpired: false
};

export default (state = initialState, action)=>{
	switch(action.type){
	case TOGGLE_CONNECTION_TOKEN_STATE:
		return {...state, 
			tokenExpired: action.payload};
	default:
		return state;
	}
};