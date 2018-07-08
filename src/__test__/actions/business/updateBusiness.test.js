import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import  {
    getBusinesses,
    getAllBusiness,
    getOneBusiness,
    deleteBusiness,
    addBusiness,
    editBusiness
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
    updateBusiness
} from "../../../Actions/actionCreators"

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ data: {} });
const businessDataMock = { business_name: "MTN Uganda", business_profile: "Telecomm company in Uganda", 
                       location: "Kampala", category: "Telecommunications"};
const loginData = { user_email: "sonia@yahoo.com", user_password: "1234567890" };
const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf") 
                        };

describe("Update business actions", () => {
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
    
    it('creates update business action after updating a businesses', () => {
        
        localStorage.setItem("access_token", loginUserMock.token);
        fetchMock.putOnce(`${BASE_URL}businesses/1`,
        { body: {businessDataMock}, headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            updateBusiness(businessDataMock)
        ];
        return store.dispatch(editBusiness(businessDataMock, 1));
        expect(calledActions).toEqual(expectedActions);
    })
})