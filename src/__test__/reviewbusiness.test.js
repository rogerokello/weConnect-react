import React from 'react';
//import expect from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import mainReducer from "../reducers";


import {Newreview} from '../components/review/New';

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
    it('checks business review page can be seen', () => {
        
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
    it('checks business can be reviewed', () => {
        
        const getReviewsfn = jest.fn();
        const onSubmitfn = jest.fn();

        const currentBusiness = {
            name:"fr",
            location:"wrt",
            category:"twrt"
        }

        const wrapper = mount(<Provider store={store}>
                                <MemoryRouter>
                                    <Newreview 
                                        addReview={onSubmitfn}
                                        currentBusiness={currentBusiness}
                                        reviews={{message:{}}}
                                        getAllReviews={getReviewsfn}/>
                                </MemoryRouter>
                              </Provider>);
        
        wrapper.find('#reviewform').simulate('submit',
     
        {preventDefault() {}}
        
        )

        expect(onSubmitfn.mock.calls.length).to.equal(1);

    });

});