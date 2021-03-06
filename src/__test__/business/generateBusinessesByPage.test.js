import React from 'react';
import expects from 'expect';
import {MemoryRouter, NavLink} from 'react-router-dom';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import mainReducer from "../../Reducers";
import Router from 'react-mock-router';


import {Reviewlist} from '../../Components/Review/List';
import {generateBusinessesByPage} from '../../Helpers/generateBusinessesByPage';

const middlewares = []
const mockStore = configureStore(mainReducer,middlewares)

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

const star = [5,5,5,5];

const column = {
    star_rating:"",
    review_summary:"",
    review_description:""
}

global.localStorage = localStorageMock;

const initialState = {
  
}

const store = mockStore(initialState)


describe ('Generate Businesses works', () => {
    it('checks star can load', () => {
        let businessess = [{name:"Roger"},{name:"Ben"}]

        generateBusinessesByPage(businessess, 1);
    });
});