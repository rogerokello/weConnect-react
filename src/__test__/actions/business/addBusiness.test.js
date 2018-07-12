import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import  {
    getBusinesses,
    getAllBusiness,
    getOneBusiness,
    deleteBusiness,
    addBusiness
} from "../../../Actions/businessActions";

import fetchMock from 'fetch-mock';
import { GET_ALL_BUSINESS } from '../../../Actions/actionTypes';
import mockSessionStorage from '../sessionStorage';
import {BASE_URL} from "../../../Actions/baseurl";
import {
    extractAllBusinesses,
    extractOneBusiness,
    removeBusiness,
    createBusiness,
    startDataFetch,
} from "../../../Actions/actionCreators"

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

describe("Add Business through API", () => {
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
    
    it('creates GET_ALL_BUSINESSES action after successfully getting businesses', () => {
        
        localStorage.setItem("access_token", loginUserMock.token);
        fetchMock.postOnce(`${BASE_URL}businesses`,
        { body: {businessDataMock}, headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
          startDataFetch(),
        ];
        
        store.dispatch(addBusiness(businessDataMock));
        expect(store.getActions()).toEqual(expectedActions);
    })
})