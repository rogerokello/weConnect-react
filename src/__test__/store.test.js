import expect from "expect";
import mainStore from "../store";

import * as types from "../Actions/actionTypes";

describe("Store", () => {
	it("should handle login", () => {
		const result = {
			"message": "Successfuly logged in",
			"status": "success"
		};

        
		mainStore.dispatch(
			{
				type: types.LOGIN_USER,
				payload:result,
			}
		);

		const  actual = mainStore.getState().user.signInMessage.status;
		const expected = "success";

		expect(actual).toEqual(expected);
	});

	it("should handle signup", () => {
		const result = {
			"message": "You registered successfully. Please log in.",
			"status": "success"
		};
     
		mainStore.dispatch(
			{
				type: types.SIGNUP_USER,
				payload:result,
			}
		);

		const  actual = mainStore.getState().user.signUpMessage.status;
		const expected = "success";

		expect(actual).toEqual(expected);
	});

	it("should handle getting all businesses", () => {
		const result = {
			"message": {},
			"status": "success"
		};
     
		mainStore.dispatch(
			{
				type: types.GET_ALL_BUSINESS,
				payload:result,
			}
		);

		const  actual = mainStore.getState().business.businesses.status;
		const expected = "success";

		expect(actual).toEqual(expected);
	});
});