import React, { Component } from "react";
import {withRouter, NavLink} from "react-router-dom";
import {NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";

import Navbar from "./navigationbar";

import Pagination from './pagination';

import store from '../store';

import {getAllBusiness, deleteBusiness} from "../actions/businessActions";


export class Businesslist extends Component {
	
	componentWillReceiveProps(recieved){
		console.log(recieved)
		if(recieved && recieved.deletemessage.status==="success"){
			this.forceUpdate();
		}
		if(store.getState().connection.tokenExpired===true){
			NotificationManager.success("Please login again to refresh your credentials", "", 5000);
			this.props.history.push("/login");
		}	
	}

	// componentDidUpdate(prevProps){
		
	// 	console.log("Current props",this.props);
	// 	console.log("Previous props",prevProps);
	// 	if(this.props.deletemessage.message !== prevProps.deleteBusiness.message){
	// 		if(this.props.deletemessage.status==="success"){
	// 			this.forceUpdate();
	// 		}
	// 		if(store.getState().connection.tokenExpired===true){
	// 			NotificationManager.success("Please login again to refresh your credentials", "", 5000);
	// 			this.props.history.push("/login");
	// 		}	
	// 	}
	// }

  	componentDidMount(){
		if(localStorage.getItem("access_token") === null){
			this.props.history.push("/login");
		}
		
		//Get all the businesses
		this.props.getAllBusiness();
  	}

  	deleteBusinessRemote(id) {
		const popup = window.confirm('Are you sure you want to delete this business?'); 
		
		if (popup === true) {
			
			NotificationManager.success("Business Deleted successfuly", "", 5000);
			this.props.deleteBusiness(id);
			this.forceUpdate();
			console.log(store.getState())
		}
	}

	render() {
		
		//Spread to extract all businesses from props
		//into a dictionary
		const businesses = Object.values({...this.props.business});


		if(businesses.length > 0){

			// Make an inplace arrangement of the elements.
			// The last one added should become first
			Array.prototype.reverse.call(businesses);

		}
		
		return (
			<div>
				<Navbar />					
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h2 className="text-center">Current list of Ugandan Businesses</h2>
							<div className="table-responsive table-stripped">          
								<table className="table">
									<thead>
										<tr>
											<th>Name</th>
											<th>Location</th>
											<th>Category</th>
											<th>Reviews</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
									{this.props.loading? <tr><td colSpan={6}><div className="text-center  alert alert-info"><span>Loading businesses</span></div></td></tr> :
										businesses.map((business, index) =>
                            				<tr key={business.id}>
												<td>{business.name}</td>
												<td>{business.location}</td>
												<td>{business.category}</td>
										
												<td>
													<NavLink to={'/reviews/' + business.id}>Reviews{' '}
													</NavLink>{' '}
												</td>
												<td>
													{business.user_id === parseInt(localStorage.getItem("user_id"),10) ? <span>{''}</span> : <NavLink className="btn btn-info" role="button" to={'/reviewbusiness/' + business.id}><span className="glyphicon glyphicon-eye-open"></span>Review{' '}</NavLink> }{' '}
													{' '}<NavLink className="btn btn-info" role="button" to={'/viewbusiness/' + business.id}><span className="glyphicon glyphicon-eye-open"></span>View</NavLink>{' '}
													{business.user_id === parseInt(localStorage.getItem("user_id"),10) ?<NavLink className="btn btn-warning" role="button" to={'/editbusiness/' + business.id}><span className="glyphicon glyphicon-edit"></span>Edit</NavLink> : <span>{' '}</span>}{' '}
													{business.user_id === parseInt(localStorage.getItem("user_id"),10) ?<span onClick={() => this.deleteBusinessRemote(business.id)} ><a className="btn btn-danger" role="button"><span className="glyphicon glyphicon-trash"></span>{' '}Delete</a></span>:<span>{' '}</span> } 
												</td>
											</tr>
											)
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				{ /* show pagination if there are more than 1 page */
                    this.props.pages > 1 && <Pagination pages={this.props.pages} currentPage={this.props.currentPage}/>
                }

				<footer className="container-fluid text-center" data-offset-bottom="10">
					<p>&copy; Roger Okello</p>
				</footer>
			</div>
		);
	}
}

Businesslist.propTypes = {
	deletemessage: PropTypes.object,
	business: PropTypes.array,
}

// Generate list of businesses for given page number
function generateBusinessesByPage(businesses, pageNo) {
    // I assumed showing 10 businesses per page
    const perPage = 10;
    if (businesses && businesses.length) {
        // Filter 10 businesses by page number
        return businesses.filter((business, i) => {
            return i >= perPage*(pageNo-1) && i < perPage*pageNo;
        });
    }
    return [];
}

const mapStateToProps = (state, ownProps) => {
	
	// Set page number to 1 if no number in url params
    let pageNo = ownProps.match.params.pageNo || 1;
	let businesses = generateBusinessesByPage(state.business.businesses.message, pageNo);
	let pages;

	if (state.business.businesses && state.business.businesses.message) {
        pages = Math.ceil(state.business.businesses.message.length / 10);
    }else{
		pages = 1;
	}
	
    return {
		business: businesses,
		deletemessage: state.business.deletebusinessMessage,
		loading: state.business.loadingbusiness,
		user_id: state.user.signInMessage.id,
		pages: pages, // Determine number of pages for pagination
		currentPage: pageNo,
		tokenExpired: state.connection.tokenExpired
    }
};


export default withRouter(connect(mapStateToProps, {getAllBusiness, deleteBusiness})(Businesslist));
