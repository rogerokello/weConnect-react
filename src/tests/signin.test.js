import React from 'react';
//import expect from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';


import {Signin} from '../components/signin';


describe ('Sign in Page', () => {
    it('checks sign in button contains class', () => {
        const user= {
            message: "success fully looged in",
            status: "success"
        }
        const mockSigninfn = jest.fn();
        const onSubmitfn = jest.fn();

        const wrapper = mount(<MemoryRouter><Signin onSubmit={onSubmitfn} user={user} signIn={mockSigninfn} /></MemoryRouter>);
        
        expect(wrapper.find('.container-fluid').exists()).to.equal(true);

    });
});