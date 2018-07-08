import reducer from '../../Reducers/businessReducer';
import {
    GET_ONE_BUSINESS,
	LOADING_BUSINESSES,
	SEARCH_FOR_BUSINESS,
	ADD_BUSINESS,
	GET_ALL_BUSINESS, 
	EDIT_BUSINESS, 
	DELETE_BUSINESS,
	CLEAR_DELETE_MESSAGE,
	CLEAR_EDIT_MESSAGE,
	CLEAR_NEW_BUSINESS_MESSAGE
} from '../../Actions/actionTypes';

describe('ADD_BUSINESS Reducer', ()=>{
    let business;
    let initialState;

    beforeEach(() => {
        business = { business_name: "MTN Uganda", business_profile: "Telecomm company in Uganda", 
                    location: "Kampala", category: "Telecommunications"};
        initialState = { 
        newbusinessMessage:{},
        businesses:{},
        singleBusiness:{},
        editbusinessMessage:{},
        deletebusinessMessage:{},
        foundbusinesses: {},
        loadingbusiness: false };

      });

    it("has initial state", () => {
        expect(reducer(undefined, {})).toEqual({ newbusinessMessage:{},
            businesses:{},
            singleBusiness:{},
            editbusinessMessage:{},
            deletebusinessMessage:{},
            foundbusinesses: {},
            loadingbusiness: false });
    });  
        
    it("should handle ADD_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: ADD_BUSINESS,
            payload: business
            })
        ).toEqual({"businesses": {}, "deletebusinessMessage": {}, "editbusinessMessage": {}, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": business, 
                    "singleBusiness": {}});
    });
    it("should handle GET_ONE_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: GET_ONE_BUSINESS,
            payload: business
            })
        ).toEqual({"businesses": {}, "deletebusinessMessage": {}, "editbusinessMessage": {}, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": {}, 
                    "singleBusiness": business});
    });
    it("should handle GET_ALL_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: GET_ALL_BUSINESS,
            payload: business
            })
        ).toEqual({"businesses": business, "deletebusinessMessage": {}, "editbusinessMessage": {}, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": {}, 
                    "singleBusiness": {}});
    });
    it("should handle GET_ALL_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: EDIT_BUSINESS,
            payload: business
            })
        ).toEqual({"businesses": {}, "deletebusinessMessage": {}, "editbusinessMessage": business, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": {}, 
                    "singleBusiness": {}});
    });
    it("should handle SEARCH_FOR_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: SEARCH_FOR_BUSINESS,
            payload: business
            })
        ).toEqual({"businesses": business, "deletebusinessMessage": {}, "editbusinessMessage": {}, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": {}, 
                    "singleBusiness": {}});
    });
    it("should handle LOADING_BUSINESSES ", () => {
        expect(
            reducer(initialState, {
            type: LOADING_BUSINESSES,
            payload: false
            })
        ).toEqual({"businesses": {}, "deletebusinessMessage": {}, "editbusinessMessage": {}, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": {}, 
                    "singleBusiness": {}});
    });
    it("should handle CLEAR_DELETE_MESSAGE ", () => {
        expect(
            reducer(initialState, {
            type: CLEAR_DELETE_MESSAGE,
            payload: business
            })
        ).toEqual({"businesses": {}, "deletebusinessMessage": business, "editbusinessMessage": {}, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": {}, 
                    "singleBusiness": {}});
    });
    it("should handle CLEAR_DELETE_MESSAGE ", () => {
        expect(
            reducer(initialState, {
            type: CLEAR_DELETE_MESSAGE,
            payload: business
            })
        ).toEqual({"businesses": {}, "deletebusinessMessage": business, "editbusinessMessage": {}, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": {}, 
                    "singleBusiness": {}});
    });
    it("should handle CLEAR_EDIT_MESSAGE ", () => {
        expect(
            reducer(initialState, {
            type: CLEAR_EDIT_MESSAGE,
            payload: business
            })
        ).toEqual({"businesses": {}, "deletebusinessMessage": {}, "editbusinessMessage": business, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": {}, 
                    "singleBusiness": {}});
    });
    it("should handle CLEAR_NEW_BUSINESS_MESSAGE ", () => {
        expect(
            reducer(initialState, {
            type: CLEAR_NEW_BUSINESS_MESSAGE,
            payload: business
            })
        ).toEqual({"businesses": {}, "deletebusinessMessage": {}, "editbusinessMessage": {}, 
                   "foundbusinesses": {}, "loadingbusiness": false, 
                   "newbusinessMessage": business,
                    "singleBusiness": {}});
    });
});