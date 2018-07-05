import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import {
    getBusinesses,
    getAllBusiness,
    getOneBusiness,
    searchForBusiness
} from "../../../actions/businessActions"
import fetchMock from 'fetch-mock';
import { GET_ALL_BUSINESS } from '../../../actions/actionTypes';
import mockSessionStorage from '../sessionStorage';
import {BASE_URL} from "../../../actions/baseurl";
import {
    extractAllBusinesses,
    extractOneBusiness,
    searchForBusinesses
} from "../../../actions/actionCreators"

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ data: {} });
const businessDataMock = { 
    name: "XEDROX",
    category: "IT", 
    location: "LIRA"
};
const loginData = { user_email: "roger@gmail.com", user_password: "1234567890" };
const loginUserMock = { token: jwt.sign({ user_email: "roger@gmail.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf") 
    };

describe("Search for businesses actions", () => {
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
    
    it('creates search for business action after successfully getting business(es)', () => {
        
        localStorage.setItem("access_token", loginUserMock.token);
        fetchMock.getOnce(`${BASE_URL}businesses?q=abc`,
        { body: {}, headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            searchForBusiness(businessDataMock)
        ];
        return store.dispatch(searchForBusiness("abc"));
        expect(calledActions).toEqual(expectedActions);
    })

})