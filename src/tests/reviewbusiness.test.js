import React from 'react';
//import expect from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import mainReducer from "../reducers";


import {Newreview} from '../components/reviewbusiness';

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


describe ('Review Business', () => {
    it('checks business can be reviewed', () => {
        
        const getReviewsfn = jest.fn();
        const onSubmitfn = jest.fn();

        const currentBusiness = {
            name:"",
            location:"",
            category:""
        }

        const wrapper = mount(<Provider store={store}><MemoryRouter><Newreview currentBusiness={currentBusiness} reviews={{message:{}}} getAllReviews={getReviewsfn}/></MemoryRouter></Provider>);
        
        expect(wrapper.find('.container-fluid').exists()).to.equal(true);

    });
});