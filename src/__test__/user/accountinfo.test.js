import React from 'react';
import expect from 'expect';
import {MemoryRouter} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";


import mainReducer from "../../reducers";
import {AccountInfo} from '../../components/user/AccountInfo';

const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;

describe ('Account info Page', () => {
    it('checks form can sumit data', () => {
        const initialState = {

        }
        const store = mockStore(initialState)
        const resetYourPassword = jest.fn();

        let user = {
            message:"Success",
            status:"succeess"
        }

        const wrapper = mount(<Provider store={store}><MemoryRouter><AccountInfo user={user} resetYourPassword={resetYourPassword} /></MemoryRouter></Provider>);

        let password = wrapper.find('input[name="password"]'); 
        let password1 = wrapper.find('input[name="password1"]');
        let password2 = wrapper.find('input[name="password2"]');

        password.instance().value = 'roger'
        password1.instance().value = 'roger'
        password2.instance().value = 'roger'
        
        wrapper.find('#accountInfoForm').simulate(
            'submit', 
            {preventDefault() {}}
        )

        expect(resetYourPassword.mock.calls.length).toBe(1)
        
    });
});