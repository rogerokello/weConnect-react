import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import {
    signUp,
    signIn,
    resetYourPassword,
    logOut
} from "../../../Actions/userActions";
import fetchMock from 'fetch-mock';
import { GET_ALL_BUSINESS } from '../../../Actions/actionTypes';
import mockSessionStorage from '../sessionStorage';
import {BASE_URL} from "../../../Actions/baseurl";
import {
    logOutUser,
    signUpUser,
    loginUser,
    startDataFetch,
	  stopDataFetch,
    resetPassword
} from "../../../Actions/actionCreators"

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store = mockStore({ user: {
	signUpMessage:{},
	signInMessage:{},
	logOutMessage:{},
	resetPasswordMessage:{}
} });
const businessDataMock = { 
    name: "XEDROX",
    category: "IT", 
    location: "LIRA"
};
const loginData = { user_email: "roger@gmail.com", user_password: "1234567890" };
const loginUserMock = { token: jwt.sign({ user_email: "roger@gmail.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf") 
    };

describe("Log out user actions", () => {
    let calledActions;
    beforeEach(() => {
        Object.defineProperty(window, "localStorage", {
            value: mockSessionStorage
        });
        store.clearActions();
        calledActions = store.getActions();
    });
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
        })

    it('creates logout user action after successfully logging out', () => {
        
        localStorage.setItem("access_token", loginUserMock.token);
        fetchMock.postOnce(`${BASE_URL}auth/logout`,
        { body: {logOutMessage:"one"}, headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
          startDataFetch(),
          stopDataFetch(),
        ];

        store.dispatch(logOut())
        expect(store.getActions()).toEqual(expectedActions);
    })

})