import React from 'react';
import expect from 'expect';
import {MemoryRouter} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";


import mainReducer from "../reducers";
import {Newbusiness} from '../components/business/New';

const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;

describe ('New business Page', () => {
    it('checks register button can work', () => {
        const initialState = {

        }
        const store = mockStore(initialState)
        const mockNewbusinessfn = jest.fn();

        const wrapper = mount(<Provider store={store}><MemoryRouter><Newbusiness addBusiness={mockNewbusinessfn} /></MemoryRouter></Provider>);

        wrapper.find('#newbusinessForm').at(0).simulate(
            'submit', 
            {preventDefault() {}}
        )

        //expect(wrapper.find(Newbusiness).length).to.equal(1)
        
        expect(mockNewbusinessfn.mock.calls.length).toBe(1)
    });
});