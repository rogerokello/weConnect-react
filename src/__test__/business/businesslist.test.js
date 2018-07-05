import React from 'react';
import expect1 from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import Loader from 'react-loader-spinner';

import Navbar from '../../components/NavigationBar'
import Pagination from '../../components/Pagination';
import mainReducer from "../../reducers";


import {Businesslist} from '../../components/business/List';

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
            status:"success",
            has_next: false,
            has_prev:false,
            user_id:1
        }
    }
}

const store = mockStore(initialState)


describe ('Business list', () => {
    let wrapper;
    let shallowwrapper;

    beforeEach( () => {
        const getBusinessesfn = jest.fn();
        const onSubmitfn = jest.fn();
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <Businesslist 
                        pendingTask={1}
                        pages={2}
                        getAllBusiness={getBusinessesfn}  />
                </MemoryRouter>
            </Provider>
        );

        
    });
    it('checks business list page loads', () => {
        
        expect(wrapper.find('.container').exists()).to.equal(true);

    });
    it('checks business list container', () => {
        

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

    it('+++ render the connected(SMART) component', () => {
        expect(wrapper.find('Businesslist').length).to.equal(1);
        expect(wrapper.find('Pagination').length).to.equal(1);//q.toEqual(1);
        expect(wrapper.find('Loader').length).to.equal(1);
        expect(wrapper.find('Navbar').length).to.equal(1);//q.toEqual(1);

        expect(wrapper.find('#tableList').length).to.equal(1);
        //to.contain.text("Company A");
     });


    it('deletes',()=>{
        //wrapper.find('.btn-danger').at(1).simulate('click');
    })
    
});