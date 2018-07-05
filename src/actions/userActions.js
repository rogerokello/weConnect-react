import {BASE_URL} from "./baseurl";

import {
	signUpUser,
	loginUser,
	logOutUser,
	startDataFetch,
	stopDataFetch,
	resetPassword
} from './actionCreators'




export const signUp = (signUpInfo) =>dispatch => {

	if (signUpInfo){

		const options = {
			method:"POST",
			body: signUpInfo, 
			headers:{
				"content-type":"application/json"
			}
		};

		fetch(BASE_URL+"auth/register",options)
			.then (result => {
				return result.json();
			})
			.then (data => {
				dispatch(signUpUser(data))
			});
    
	}
};

export const signIn = (signInInfo) => dispatch => {
	if (signInInfo){
		const options = {
			method:"POST",
			body: signInInfo, 
			headers:{
				"content-type":"application/json"
			}
		};
		dispatch(startDataFetch());
		fetch(BASE_URL+"auth/login",options)
			.then (result => {
				return result.json();

			})
			.then (data => {
				console.log('----', data);	
				dispatch(stopDataFetch())
				dispatch(loginUser(data))
				console.log("After login user dispatch", data)
			});
    
	}
};

export const resetYourPassword = (resetInfo) => dispatch => {
	if (resetInfo){
		const options = {
			method:"POST",
			body: resetInfo, 
			headers:{
				"content-type":"application/json",
				"Authorization": "Bearer " + localStorage.getItem("access_token")
			}
		};
		dispatch(startDataFetch());
		fetch(BASE_URL+"auth/reset-password",options)
			.then (result => {
				return result.json();

			})
			.then (data => {		
				dispatch(stopDataFetch())
				dispatch(resetPassword(data))
			});
    
	}
};


export const logOut = () => dispatch => {

	const options = {
		method:"POST", 
		headers:{
			"content-type":"application/json",
			"Authorization": "Bearer " + localStorage.getItem("access_token")
		}
	};

	fetch(BASE_URL+"auth/logout",options)
		.then (result => {
			return result.json();
		})
		.then (data => {
			dispatch(logOutUser(data))
		});
};