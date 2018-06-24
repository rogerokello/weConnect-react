import React from 'react';
//import expect from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";

import Navbar from '../components/navigationbar'
import mainReducer from "../reducers";


import {Businesslist} from '../components/businesslist';

const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;

const initialState = {
    business: {
        businesses: {
            message: {
                id:"1",
                name:"l",
                location: "l"
            },
            status:"success"
        }
    }
}

const store = mockStore(initialState)


describe ('Business list', () => {
    it('checks business list page loads', () => {
        
        const getBusinessesfn = jest.fn();
        const onSubmitfn = jest.fn();

        const wrapper = mount(<Provider store={store}><MemoryRouter><Businesslist getAllBusiness={getBusinessesfn}  /></MemoryRouter></Provider>);
        
        expect(wrapper.find('.table').exists()).to.equal(true);

    });
    it('checks business list container', () => {
        
        const getBusinessesfn = jest.fn();
        const onSubmitfn = jest.fn();

        const wrapper = mount(<Provider store={store}><MemoryRouter><Businesslist getAllBusiness={getBusinessesfn}  /></MemoryRouter></Provider>);
        

        expect(wrapper.containsMatchingElement(<thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Category</th>
                <th>Reviews</th>
                <th>Actions</th>
            </tr>
        </thead>)).to.equal(true);

    });
});