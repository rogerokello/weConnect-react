import React from 'react';
import expect from 'expect';
import {MemoryRouter} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';


import {Signup} from '../components/user/Signup';

describe ('Sign up Page', () => {
    it('checks sign in button can work', () => {
        const mockSignupfn = jest.fn();

        const wrapper = mount(<MemoryRouter><Signup signUp={mockSignupfn} /></MemoryRouter>);

        wrapper.find('#signupForm').simulate(
            'submit', 
            {preventDefault() {}}
        )
    
        expect(mockSignupfn.mock.calls.length).toBe(1)
    });
});