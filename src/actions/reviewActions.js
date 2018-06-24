import {BASE_URL} from "./baseurl";

import {
	createReview,
	findAllReviews,
} from './actionCreators'

export const addReview = (reviewInfo, businessId) => dispatch => {
    
	if(reviewInfo && businessId){

		const options = {
			method:"POST",
			body: reviewInfo,
			headers:{
				"content-type":"application/json",
				"Authorization": "Bearer " + localStorage.getItem("access_token")
			}
		};

		fetch(BASE_URL+"businesses/" + businessId + "/reviews",options)
			.then (result => {
					return result.json();
			})
			.then (data => {
					dispatch(createReview(data));
			});
	}
};

export const getAllReviews = (businessId) => dispatch => {
        
	if(businessId){
		const options = {
			method:"GET",
			headers:{
				"content-type":"application/json",
				"Authorization": "Bearer " + localStorage.getItem("access_token")
			}
		};

		fetch(BASE_URL+"businesses/" + businessId + "/reviews",options)
			.then (response => {    
					return response.json();
				},error => {
					console.log(error);
			})
			.then(data => {
					dispatch(findAllReviews(data));
			});
	}
};