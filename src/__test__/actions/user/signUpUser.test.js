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
    resetPassword
} from "../../../Actions/actionCreators"

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ data: {} });
const businessDataMock = { business_name: "MTN Uganda", business_profile: "Telecomm company in Uganda", 
                       location: "Kampala", category: "Telecommunications"};
const loginData = { user_email: "sonia@yahoo.com", user_password: "1234567890" };
const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf") 
                        };

describe("Sign up user actions", () => {
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

    it('creates signUp action after successfully signing up', () => {
        
        localStorage.setItem("access_token", loginUserMock.token);
        fetchMock.postOnce(`${BASE_URL}auth/register`,
        { body: {}, headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            signUpUser(businessDataMock)
        ];
        return store.dispatch(signUp({user:"one"}));
        expect(calledActions).toEqual(expectedActions);
    })

})