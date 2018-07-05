import { 
	ADD_REVIEW,
	GET_ALL_REVIEWS,
	CLEAR_REVIEW_LIST,
	CLEAR_NEW_REVIEW_MESSAGE
} from "../actions/actionTypes";

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
		case CLEAR_REVIEW_LIST:
			return{
				...state,
				reviews: action.payload
			}
		case CLEAR_NEW_REVIEW_MESSAGE:
			return{
				...state,
				reviewMessage: action.payload
			}
		default:
			return state;
	}
};