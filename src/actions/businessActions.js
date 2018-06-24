import * as types from "./actionTypes";
import {BASE_URL} from "./baseurl";

import {
	createBusiness,
	removeBusiness,
	updateBusiness,
	changeTokenState,
	loadBusinesses,
	extractAllBusinesses,
	searchForBusinesses,
	extractOneBusiness
} from './actionCreators'

export const addBusiness = (businessInfo) => dispatch => {
    
	if(businessInfo){
        
		const options = {
			method:"POST",
			body: businessInfo,
			headers:{
				"content-type":"application/json",
				"Authorization": "Bearer " + localStorage.getItem("access_token")
			}
		};

		fetch(BASE_URL+"businesses",options)
			.then (result => {
				return result.json();
			})
			.then (data => {
				dispatch(createBusiness(data))
			});
	}
};

export const deleteBusiness = (businessId) => dispatch => {
    
	if(businessId){
        
		const options = {
			method:"DELETE",
			headers:{
				"content-type":"application/json",
				"Authorization": "Bearer " + localStorage.getItem("access_token")
			}
		};

		fetch(BASE_URL+"businesses/"+businessId, options)
			.then (result => {
                
				return result.json();
			})
			.then (data => {
				dispatch(removeBusiness(data))
			});
	}
};

export const editBusiness = (businessInfo, businessId) => dispatch => {
    
	if(businessInfo && businessId){
        
		const options = {
			method:"PUT",
			body: businessInfo,
			headers:{
				"content-type":"application/json",
				"Authorization": "Bearer " + localStorage.getItem("access_token")
			}
		};

		fetch(BASE_URL+"businesses/"+businessId, options)
			.then (result => {
				return result.json();
			})
			.then (data => {
				dispatch(updateBusiness(data))
			});
	}
};

export const getAllBusiness = () => dispatch => {
        
	const options = {
		method:"GET",
		headers:{
			"content-type":"application/json",
			"Authorization": "Bearer " + localStorage.getItem("access_token")
		}
	};
	dispatch({
		type: types.LOADING_BUSINESSES,
		payload: true
	});
	fetch(BASE_URL+"businesses",options)
		.then (response => {

			if(response.ok){
				return response.json();
			}else{
				dispatch(changeTokenState())
			}

		},error => {
			console.log(error);
		})
		.then(data => {
			dispatch(loadBusinesses())
			dispatch(extractAllBusinesses(data))
		}).catch(

		);
};

export const getOneBusiness = (id) => dispatch => {
        
	const options = {
		method:"GET",
		headers:{
			"content-type":"application/json",
			"Authorization": "Bearer " + localStorage.getItem("access_token")
		}
	};
	dispatch({
		type: types.LOADING_BUSINESSES,
		payload: true
	});
	fetch(BASE_URL+"businesses/"+id,options)
		.then (response => {

			if(response.ok){
				return response.json();
			}else{
				console.log(response.json());
				dispatch(changeTokenState())
			}

		},error => {
			console.log(error);
		})
		.then(data => {
			dispatch(loadBusinesses())
			dispatch(extractOneBusiness(data))
		}).catch(

		);
};

export const searchForBusiness = (searchString) => dispatch => {
	console.log("data", searchString);
	if(searchString === undefined){
		searchString = "";
	}
        
	const options = {
		method:"GET",
		headers:{
			"content-type":"application/json",
			"Authorization": "Bearer " + localStorage.getItem("access_token")
		}
	};

	fetch(BASE_URL+"businesses?q="+ searchString,options)
		.then (response => {
        
			return response.json();
		},error => {
			console.log(error);
		})
		.then(data => {
            dispatch(searchForBusinesses(data))
		});
};