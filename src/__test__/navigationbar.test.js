import React from 'react';
import expect from 'expect';
import {MemoryRouter} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";


import mainReducer from "../reducers";
import {Navbar} from '../components/NavigationBar';

const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;

describe ('Navigation Bar', () => {
    it('checks form can search ', () => {
        const initialState = {

        }
        const store = mockStore(initialState)
        const searchForBusiness = jest.fn();
        const getAllBusiness = jest.fn();
        const history = {
            push: jest.fn
        }

        const wrapper = mount(<MemoryRouter><Navbar history={history} getAllBusiness={getAllBusiness} searchForBusiness={searchForBusiness} /></MemoryRouter>);

        let search = wrapper.find('input[name="search"]'); 
        

        search.instance().value = 'roger';
        
        
        wrapper.find('#searchform').simulate(
            'submit', 
            {preventDefault() {target: {search:"this"}}}
        )

        expect(searchForBusiness.mock.calls.length).toBe(1)
        
    });
});