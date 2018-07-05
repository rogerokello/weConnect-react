import * as types from "./actionTypes";
import {BASE_URL} from "./baseurl";
import axios from 'axios';

import {
	createBusiness,
	removeBusiness,
	updateBusiness,
	changeTokenState,
	loadBusinesses,
	extractAllBusinesses,
	searchForBusinesses,
	extractOneBusiness,
	startDataFetch,
	stopDataFetch
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
		dispatch(startDataFetch());
		fetch(BASE_URL+"businesses",options)
			.then (result => {
				return result.json();
			})
			.then (data => {
				dispatch(stopDataFetch());
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
		dispatch(startDataFetch());
		fetch(BASE_URL+"businesses/"+businessId, options)
			.then (result => {
                
				return result.json();
			})
			.then (data => {
				dispatch(stopDataFetch());
				dispatch(removeBusiness(data, businessId))
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
		dispatch(startDataFetch());
		fetch(BASE_URL+"businesses/"+businessId, options)
			.then (result => {
				return result.json();
			})
			.then (data => {
				dispatch(stopDataFetch());
				dispatch(updateBusiness(data))
			});
	}
};

export const getAllBusiness = (nextorprev="") => dispatch => {
	let options;
	let url;
	if(nextorprev !== ""){
		url = BASE_URL+"businesses?pageNo="+nextorprev
		options = {
			method:"GET",
			url:BASE_URL+"businesses?pageNo="+nextorprev,
			headers:{
				"content-type":"application/json",
				"Authorization": "Bearer " + localStorage.getItem("access_token")
			}
		};
	}else{
		url = BASE_URL+"businesses";
		options = {
			method:"GET",
			url:BASE_URL+"businesses",
			headers:{
				"content-type":"application/json",
				"Authorization": "Bearer " + localStorage.getItem("access_token")
			}
		};
	}
	dispatch(startDataFetch());
	fetch(url,options)
		.then (response => {	
			return response.data;
		})
		.then(data => {
			//console.log(data)
			dispatch(stopDataFetch());
			dispatch(extractAllBusinesses(data))
		}).catch(error => {
			console.log(error)
			dispatch(stopDataFetch());
		}
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
	dispatch(startDataFetch());
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
			dispatch(stopDataFetch());
			dispatch(extractOneBusiness(data))
		}).catch(

		);
};

export const searchForBusiness = (searchString) => dispatch => {
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

	dispatch(startDataFetch());
	fetch(BASE_URL+"businesses?q="+ searchString,options)
		.then (response => {
        
			return response.json();
		},error => {
			console.log(error);
		})
		.then(data => {
			dispatch(stopDataFetch());
            dispatch(searchForBusinesses(data))
		});
};