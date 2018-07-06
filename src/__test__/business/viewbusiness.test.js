import React from 'react';
//import expect from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {SingleBusiness} from "../../Components/Business/Layout/SingleBusiness";

import mainReducer from "../../Reducers";


import {Viewbusiness} from '../../Components/Business/View';

const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;

const initialState = {
    business:{
        businesses: {
            message: {}
        }
    }
}

const store = mockStore(initialState)

const getAllBusinessfn = jest.fn();
const onSubmitfn = jest.fn();

const currentBusiness = {
    name:"",
    location:"",
    category:""
}

const wrapper = mount(<Provider store={store}><MemoryRouter><Viewbusiness currentBusiness={currentBusiness} getAllBusiness={getAllBusinessfn}/></MemoryRouter></Provider>);
describe ('View Business', () => {
    it('check business can be viewed', () => {
        
        // const getAllBusinessfn = jest.fn();
        // const onSubmitfn = jest.fn();

        // const currentBusiness = {
        //     name:"",
        //     location:"",
        //     category:""
        // }

        // const wrapper = mount(<Provider store={store}><MemoryRouter><Viewbusiness currentBusiness={currentBusiness} getAllBusiness={getAllBusinessfn}/></MemoryRouter></Provider>);
        // console.log(wrapper.find(SingleBusiness))
        expect(wrapper.find(SingleBusiness).exists()).to.equal(true);

    });
    it('should call find current business',()=>{
        const wrapper = mount(<Provider store={store}><MemoryRouter><Viewbusiness currentBusiness={currentBusiness} getAllBusiness={getAllBusinessfn}/></MemoryRouter></Provider>);
        let component = wrapper.find(Viewbusiness)
    })
});