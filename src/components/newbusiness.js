import React, { Component } from "react";
import {withRouter} from "react-router-dom";

import {connect} from 'react-redux';

import {PropTypes} from "prop-types";

import {NotificationManager} from 'react-notifications';


import Navbar from "./navigationbar";

import {addBusiness} from "../actions/businessActions";


export class Newbusiness extends Component {
	constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

	componentWillReceiveProps(recieved){
		if(recieved && recieved.business.status==="success"){
            this.props.history.push("/businesslist");
		}

		if(recieved && recieved.business.status === "failure"){
			NotificationManager.info(recieved.business.message, "", 5000);
		}
	};

    componentWillMount(){
        if(localStorage.getItem("access_token") === null){
            this.props.history.push("/login");
        }
	}

	circularStringify = (object) =>{
		let simpleObj={};

		for (let prop in object){
			if (!object.hasOwnProperty(prop)){
					continue;
			}
			if (typeof(object[prop]) === 'object'){
					continue;
			}
			simpleObj[prop] = object[prop];
		}

		return JSON.stringify(simpleObj)

	}

	
	submitForm = (e) => {
		e.preventDefault();

		let details = {
            name: e.target.elements.name.value,
            category: e.target.elements.category.value,
            location: e.target.elements.location.value,
        };

		this.props.addBusiness(this.circularStringify(details))
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
							<h2 className="text-center">Register a new business</h2>

							<form id="newbusinessForm" className="form-horizontal" onSubmit = {this.submitForm}>
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="businessname">Name:</label>
									<div className="col-sm-10">
										<input className="form-control" name="name" placeholder="Business Name" id="businessname" maxLength="100" size="100"/>
									</div>
								</div>
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="businesslocation">Location:</label>
									<div className="col-sm-10">
										<input className="form-control" name="location" placeholder="Business Location" id="businesslocation" maxLength="100" size="100"/>
									</div>
								</div>
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="businesscategory">Category:</label>
									<div className="col-sm-10">
										<input className="form-control" name="category" placeholder="Business Category" id="businesscategory" maxLength="100" size="100"/>
									</div>
								</div>
					
								<button type="submit" className="btn btn-warning text-center"><span className="glyphicon glyphicon-plus"></span> Register</button>
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

Newbusiness.propTypes = {
	addBusiness: PropTypes.func.isRequired,
	business:PropTypes.object
}

const mapStateToProps = state => {
    return {
		business: state.business.newbusinessMessage,	
    }
};


export default withRouter(connect(mapStateToProps, {addBusiness})(Newbusiness));