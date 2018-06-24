import React from 'react';
import expect from 'expect';
import {MemoryRouter} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";


import mainReducer from "../reducers";
import {Editbusiness} from '../components/editbusiness';

const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;

const currentBusinessInfo = 
    {
        id: "1",
        location: "lira",
        name: "xedrox",
        category: "it"
    }

const initialState = {
    
}

const store = mockStore(initialState)
console.log(store.getState())
const mockEditbusinessfn = jest.fn();
const mockChangefn = jest.fn();

const toBeMounted = <Provider store={store}>
                        <MemoryRouter>
                            <Editbusiness 
                                currentBusiness={currentBusinessInfo}
                                editBusiness={mockEditbusinessfn}    
                            />
                        </MemoryRouter>
                    </Provider>

const wrapper = mount(toBeMounted);


describe ('Edit business Page', () => {
    it('checks edit button can work', () => {      
        wrapper.find('#editBusinessForm').simulate(
            'submit', 
            {preventDefault() {}}
        )
          
        expect(mockEditbusinessfn.mock.calls.length).toBe(1)
    });
});