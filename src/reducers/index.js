import { combineReducers} from "redux";
import userReducer from "./userReducer";
import businessReducer from "./businessReducer";
import reviewReducer from "./reviewReducer";
import connectionReducer from "./connectionReducer"


const mainReducer = combineReducers({
	user: userReducer,
	business: businessReducer,
	review: reviewReducer,
	connection: connectionReducer
});

export default mainReducer;