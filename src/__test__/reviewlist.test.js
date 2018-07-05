import React from 'react';
import expects from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import mainReducer from "../reducers";
import Router from 'react-mock-router';


import {Reviewlist} from '../components/review/List';

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

        //const wrapper = mount(<Provider store={store}><MemoryRouter><Reviewlist reviews={{message:{}}} getAllReviews={getReviewsfn}/></MemoryRouter></Provider>);
        
        //expect(wrapper.find(Reviewlist).length).to.equal(1)
        // expect(wrapper.find(".col-sm-3").exists()).to.equal(true);

    });
    it('should render without crashing', () => {

        const getReviewsfn = jest.fn();
        const onSubmitfn = jest.fn();
        const reviewId = "1";

        //const wrapper = mount(<Provider store={store}><Router><Reviewlist reviewId={reviewId} reviews={{message:{}}} getAllReviews={getReviewsfn}/></Router></Provider>);

        //expects(wrapper).toMatchSnapshot();
    });
});