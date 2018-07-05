import React from 'react';
import expect from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import Router from 'react-mock-router';
import {shallow ,mount} from 'enzyme';
//import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import mainReducer from "../../reducers";
const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

import Logout, { Signin } from '../../components/user/Logout';

let mockSigninfn = jest.fn();
let onSubmitfn = jest.fn();

let props = {
    signIn:mockSigninfn,
    history: { push: jest.fn() }, 
}

let wrapper;

// beforeEach(() => {
    // wrapper = mount(<MemoryRouter><Logout {...props}/></MemoryRouter>);
// });

describe ('Logout Page', () => {
    const initialState = {
        user:{logoutMessage:{}}
    }
    const store = mockStore(initialState)

    it('checks it renders correctly', () => {
        
        wrapper = mount(<Provider store={store}><MemoryRouter><Logout/></MemoryRouter></Provider>);
        // const mockSigninfn = jest.fn();

        // const wrapper = mount(<MemoryRouter><Signin signIn={mockSigninfn} /></MemoryRouter>);

        // let username = wrapper.find('input[name="username"]');
        // let password = wrapper.find('input[name="password"]');

        // username.instance().value = 'roger'
        // password.instance().value = 'roger'
        
        // wrapper.find('#signinform').simulate(
        //     'submit', 
        //     {preventDefault() {}}
        // )

        // expect(mockSigninfn.mock.calls.length).toBe(1)
    });
});