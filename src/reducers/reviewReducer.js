import { ADD_REVIEW, GET_ALL_REVIEWS } from "../actions/actionTypes";

const initialState = {
	reviewMessage:{},
	reviews:{},
};

export default (state = initialState, action)=>{
	switch(action.type){
		case ADD_REVIEW:
			return {...state, 
				reviewMessage: action.payload
            };
        case GET_ALL_REVIEWS:
			return {...state, 
				reviews: action.payload
            };
		default:
			return state;
	}
};