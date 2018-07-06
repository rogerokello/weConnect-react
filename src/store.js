import { createStore, applyMiddleware} from "redux";

import thunk from "redux-thunk";

import mainReducer from "./Reducers";

const mainStore = createStore(mainReducer, applyMiddleware(thunk));

export default  mainStore;

