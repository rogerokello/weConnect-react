import React from 'react';
import {shallow ,mount} from 'enzyme';
import { expect } from 'chai';
import {MemoryRouter, NavLink} from 'react-router-dom';

import Pagination from '../components/pagination';



describe ('Pagination test', () => {
    it('checks pagination page works', () => {
        
        const getBusiness = jest.fn();
        const pages = 4;
        const currentPage = 1;


        const wrapper = mount(<MemoryRouter><Pagination getBusiness={getBusiness} pages={pages} currentPage={currentPage}/></MemoryRouter>);
        wrapper.find('#spanPrevlink').simulate('click');
     
        expect(getBusiness.mock.calls.length).to.equal(1);

    });

});