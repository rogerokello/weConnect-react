import React from 'react';
import expect from 'expect';
import {MemoryRouter} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";

import {FetchData} from "../../Components/Loaders/FetchData";


import mainReducer from "../../Reducers";
import {Editbusiness} from '../../Components/Business/Edit';

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

const editMessage = {
    message: "",
    status: ""
}

const store = mockStore(initialState);
const mockEditbusinessfn = jest.fn();
const mockChangefn = jest.fn();

describe ('Edit business Page', () => {
    let wrapper;
    beforeEach( () => {
        const toBeMounted = <Provider store={store}>
                                <MemoryRouter>
                                    <Editbusiness 
                                        currentBusiness={currentBusinessInfo}
                                        editBusiness={mockEditbusinessfn} 
                                        editMessage={editMessage}   
                                    />
                                </MemoryRouter>
                            </Provider>
        
        wrapper = mount(toBeMounted);
    });
    it('checks edit form submits', () => {  
        expect(wrapper.find(Editbusiness).length).toEqual(1);
        expect(wrapper.find(FetchData).length).toEqual(1);
        wrapper.find('#editBusinessForm').at(1).simulate(
            'submit', 
            {preventDefault() {}}
        )
          
        expect(mockEditbusinessfn.mock.calls.length).toBe(1)
    });
    it('checks edit business component can edit', () => {
        let businessName = wrapper.find('#businessname');
        let category = wrapper.find('#businesscategory');
        let location = wrapper.find('#businesslocation');
        businessName.instance().value = 'jsjs';
        category.instance().value = "fdsafajsjs";
        location.instance().value = "jkl"
        businessName.instance().value = "fdsjsjs";
        expect(businessName.instance().value).toEqual('fdsjsjs');
        expect(category.instance().value).toEqual('fdsafajsjs');
        expect(location.instance().value).toEqual('jkl');        
    })
    it('matches snapshot',()=>{
        let wrapper = shallow(<Editbusiness currentBusiness={currentBusinessInfo}
            editBusiness={mockEditbusinessfn} 
            editMessage={editMessage} />) 
        expect(wrapper).toMatchSnapshot()
    })
    
    
});