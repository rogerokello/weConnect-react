import React from 'react';
//import expect from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import mainReducer from "../reducers";


import {Viewbusiness} from '../components/viewbusiness';

const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;

const initialState = {
    
}

const store = mockStore(initialState)


describe ('View Business', () => {
    it('check business can be viewed', () => {
        
        const getAllBusinessfn = jest.fn();
        const onSubmitfn = jest.fn();

        const currentBusiness = {
            name:"",
            location:"",
            category:""
        }

        const wrapper = mount(<Provider store={store}><MemoryRouter><Viewbusiness currentBusiness={currentBusiness} getAllBusiness={getAllBusinessfn}/></MemoryRouter></Provider>);
        
        expect(wrapper.find('.container-fluid').exists()).to.equal(true);

    });
});