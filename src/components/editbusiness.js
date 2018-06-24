import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import {NotificationManager} from 'react-notifications';


import {connect} from 'react-redux';

import {PropTypes} from "prop-types";

import Navbar from "./navigationbar";

import {editBusiness} from "../actions/businessActions";


export class Editbusiness extends Component {
	constructor(props) {
        super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			currentBusiness:{}
		};
    }

	componentWillReceiveProps(recieved){
		if(recieved && recieved.editMessage.status==="success"){
            this.props.history.push("/businesslist");
		}

		if(recieved && recieved.editMessage.status === "failure"){
			NotificationManager.info(recieved.editMessage.message, "", 5000);
		}
	};

    componentWillMount(){
        if(localStorage.getItem("access_token") === null){
            this.props.history.push("/login");
        }
	}

	componentDidMount(){
		this.setState({currentBusiness:this.props.currentBusiness});
	}

	handleEdit = (e) =>{
		let field = e.target.name;
		let business = this.state.currentBusiness;

		if(e.target.type !== "hidden"){
			business[field] = e.target.value;
		}

		this.setState({
			currentBusiness:business
		});
	}
	
	submitForm = (e) => {
		e.preventDefault();

		if(this.state.currentBusiness){
			let business = this.state.currentBusiness;
			let businesslist = {};
			
			//Remove fields with number
			for (var key in business) {
				if (business.hasOwnProperty(key)) {

					if((typeof business[key]) === "number"){
						continue;
					}
					businesslist[key] = business[key];
				}
			}

			this.props.editBusiness(JSON.stringify(businesslist), this.state.currentBusiness.id);
		}
	}

	render() {
		return (
			
			<div>
				
				<Navbar/>
				<div className="container-fluid text-center">    
					<div className="row content">
						<div className="col-sm-3">
						</div>
						<div className="col-sm-6">
							<h2 className="text-center">Edit business</h2>

							<form className="form-horizontal" id="editBusinessForm" onSubmit = {this.submitForm}>
								
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="businessname">Name:</label>
									<div className="col-sm-10">
										<input className="form-control" defaultValue={this.state.currentBusiness.name} name="name" placeholder="Business Name" id="businessname" maxLength="100" size="100"/>
									</div>
								</div>
								
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="businesslocation">Location:</label>
									<div className="col-sm-10">
										<input className="form-control" defaultValue={this.state.currentBusiness.location} name="location" placeholder="Business Location" id="businesslocation" maxLength="100" size="100"/>
									</div>
								</div>
								
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="businesscategory">Category:</label>
									<div className="col-sm-10">
										<input className="form-control" defaultValue={this.state.currentBusiness.category} name="category" placeholder="Business Category" id="businesscategory" maxLength="100" size="100"/>
									</div>
								</div>
								
								<button type="submit" className="btn btn-warning text-center"><span className="glyphicon glyphicon-edit"></span> Edit</button>
							</form>
							
						</div>
						<div className="col-sm-3">
						</div>
					</div>

					<footer className="container-fluid text-center" data-offset-bottom="10">
						<p>&copy; Roger Okello</p>
					</footer>
				</div>
			</div>
		);
	}
}

// Find current business based on ID passed in URL
function findCurrentBusiness(businesses, id = -1) {

    // Find business for given id
    return businesses.find(business => {
        return parseInt(business.id, 10) === parseInt(id, 10);
    });
}

Editbusiness.propTypes = {
	editBusiness: PropTypes.func.isRequired,
	business:PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
	let currentBusiness;
	if(state){
		// currentBusiness = state.business.businesses.message.length ? findCurrentBusiness(state.business.businesses.message, ownProps.match.params.id) : null;
		if(state.business.businesses.message.length) {
			currentBusiness = findCurrentBusiness(state.business.businesses.message, ownProps.match.params.id);
		}else{
			currentBusiness = null;
		}
	}
	return {
		currentBusiness,
		business: state.business.businesses,
		editMessage: state.business.editbusinessMessage	
    }
};


export default withRouter(connect(mapStateToProps, {editBusiness})(Editbusiness));