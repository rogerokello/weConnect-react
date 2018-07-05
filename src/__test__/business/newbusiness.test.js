import React from 'react';
import expect from 'expect';
import {MemoryRouter} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";


import mainReducer from "../../reducers";
import {Newbusiness} from '../../components/business/New';

const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;

describe ('New business Page', () => {
    const initialState = {

    }
    let wrapper;
    let store = mockStore(initialState)
    let mockNewbusinessfn = jest.fn();
    beforeEach( () => {
        
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <Newbusiness addBusiness={mockNewbusinessfn} />
                </MemoryRouter>
            </Provider>
        );
    });
    
    it('checks register button can work', () => {

        wrapper.find('#newbusinessForm').at(0).simulate(
            'submit', 
            {preventDefault() {}}
        )
        expect(mockNewbusinessfn.mock.calls.length).toBe(1)
    });
    it('should match snapshot',() =>{
        const wrapper = shallow(<Newbusiness addBusiness={mockNewbusinessfn} />)
        expect(wrapper).toMatchSnapshot();
    })

});