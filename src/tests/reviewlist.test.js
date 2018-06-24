import React from 'react';
//import expect from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import mainReducer from "../reducers";


import {Reviewlist} from '../components/reviewlist';

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


describe ('Review list', () => {
    it('checks review page can load', () => {
        
        const getReviewsfn = jest.fn();
        const onSubmitfn = jest.fn();

        const wrapper = mount(<Provider store={store}><MemoryRouter><Reviewlist reviews={{message:{}}} getAllReviews={getReviewsfn}/></MemoryRouter></Provider>);
        
        expect(wrapper.find('.container-fluid').exists()).to.equal(true);

    });
});