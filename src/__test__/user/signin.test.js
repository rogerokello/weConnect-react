import React from 'react';
import expect from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import Router from 'react-mock-router';
import {shallow ,mount} from 'enzyme';
//import { expect } from 'chai';


import {Signin} from '../../Components/User/Signin';

let mockSigninfn = jest.fn();
let onSubmitfn = jest.fn();

let props = {
    signIn:mockSigninfn,
    history: { push: jest.fn() }, 
}

let wrapper;

beforeEach(() => {
    wrapper = mount(<Router><Signin {...props}/></Router>);
});

describe ('Sign in Page', () => {

    it('checks sign in button can work', () => {
        const mockSigninfn = jest.fn();

        const wrapper = mount(<MemoryRouter><Signin signIn={mockSigninfn} /></MemoryRouter>);

        let username = wrapper.find('input[name="username"]');
        let password = wrapper.find('input[name="password"]');

        username.instance().value = 'roger'
        password.instance().value = 'roger'
        
        wrapper.find('#signinform').simulate(
            'submit', 
            {preventDefault() {}}
        )

        expect(mockSigninfn.mock.calls.length).toBe(1)
    });
});