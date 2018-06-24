import React, { Component } from "react";
import {withRouter} from "react-router-dom";


import {connect} from 'react-redux';

import {PropTypes} from "prop-types";


import Navbar from "./navigationbar";

import {deleteBusiness, getAllBusiness, getOneBusiness} from "../actions/businessActions";



export class Viewbusiness extends Component {

    componentWillMount(){
        if(localStorage.getItem("access_token") === null){
          this.props.history.push("/login");
        }
    
        //Dispatch action to get all the businesses
        this.props.getAllBusiness();

        // Dispatch action to get one business
        //this.props.getOneBusiness();
    }

    deleteBusiness(id) {
		if (window.confirm('Are you sure you want to delete this business?')) {
            this.props.deleteBusiness(id);
            this.props.history.push("/businesslist");
		}
	}

	render() {
        console.log(this.props.singleBusiness);
		return (		
			<div>	
				<Navbar/>
				<div className="container-fluid text-center">    
                    <div className="row content">
                        <div className="col-sm-3">
                        </div>
                        <div className="col-sm-6">
                            <h2 className="text-center">Business Details</h2>
                            <div className="list-group">
                                <ul>
                                    <li className="list-group-item active">
                                        <h4 className="list-group-item-heading">Business Information: {this.props.currentBusiness.name}</h4>
                                    </li>
                                    <li  className="list-group-item text-left">
                                        <div>
                                            <span className="list-group-item-heading"><strong>Name:</strong></span>
                                            <span className="list-group-item-text">{this.props.currentBusiness.name}</span>
                                        </div>
                                        <div>
                                            <span className="list-group-item-heading"><strong>Location:</strong></span>
                                            <span className="list-group-item-text">{this.props.currentBusiness.location}</span>
                                        </div>
                                        <div>
                                            <span className="list-group-item-heading"><strong>Category:</strong></span>
                                            <span className="list-group-item-text">{this.props.currentBusiness.category}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
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

Viewbusiness.propTypes = {
	currentBusiness:PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
	let currentBusiness;
	if(state){
		currentBusiness = state.business.businesses.message.length ? findCurrentBusiness(state.business.businesses.message, ownProps.match.params.id) : null;
	}
	return {
        currentBusiness,
        //singleBusiness: state.business.singleBusiness.message	
    };
};

export default withRouter(connect(mapStateToProps, {deleteBusiness, getAllBusiness, getOneBusiness})(Viewbusiness));