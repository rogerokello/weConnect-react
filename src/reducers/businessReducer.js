import { GET_ONE_BUSINESS,LOADING_BUSINESSES,SEARCH_FOR_BUSINESS ,ADD_BUSINESS, GET_ALL_BUSINESS, EDIT_BUSINESS, DELETE_BUSINESS } from "../actions/actionTypes";

const initialState = {
	newbusinessMessage:{},
	businesses:{},
	singleBusiness:{},
	editbusinessMessage:{},
	deletebusinessMessage:{},
	foundbusinesses: {},
	loadingbusiness: false
};

export default (state = initialState, action)=>{
	switch(action.type){
		case ADD_BUSINESS:
			return {...state, 
				newbusinessMessage: action.payload
			};
		case GET_ALL_BUSINESS:
			return {...state, 
				businesses: action.payload
			};
		case GET_ONE_BUSINESS:
			return {...state, 
				singleBusiness: action.payload
			};
		case EDIT_BUSINESS:
			return {...state, 
				editbusinessMessage: action.payload
			};
		case DELETE_BUSINESS:
			// Return new list without deleted businesses
			let one = state.businesses.message.filter(business => 
				business.id !== action.id
			);

			let businesses = {
				message: one,
				status: "success" 
			}

			return {...state, 
				businesses
			};
		case SEARCH_FOR_BUSINESS:
			return {...state, 
				businesses: action.payload
			};
		case LOADING_BUSINESSES:
			return {...state, 
				loadingbusiness: action.payload
			};		
		default:
			return state;
	}
};