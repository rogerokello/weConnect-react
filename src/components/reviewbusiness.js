import React, { Component } from "react";
import {withRouter} from "react-router-dom";

import {connect} from 'react-redux';

import {PropTypes} from "prop-types";


import Navbar from "./navigationbar";


import {addReview} from "../actions/reviewActions";


export class Newreview extends Component {
	constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

	componentWillReceiveProps(recieved){
		if(recieved && recieved.review.status==="success"){

            this.props.history.push(
                {
                    pathname: "/reviews/"+recieved.businessId,
                    state: { businessId: recieved.businessId }
                }
            );

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

		return JSON.stringify(simpleObj);

	}

	
	submitForm = (e) => {
        e.preventDefault();
        
        let reviewSummary = e.target.elements["reviewsummary"].value;

        let reviewDetails = e.target.elements["reviewdetails"].value;

        let ratingDropdown = e.target.elements["rating"];
        let index = ratingDropdown.selectedIndex;
        let businessRating = ratingDropdown.options[index].value;

		let details = {
            star_rating: businessRating,
            review_description: reviewDetails,
            review_summary: reviewSummary,
        };

		this.props.addReview(this.circularStringify(details), this.props.businessId);
	}

	render() {
		return (
			
			<div>
				
				<Navbar/>

                <div className="container-fluid text-center">    
                    <div className="row content">
                        <h2 className="text-center">Create a review for:{' '}{this.props.currentBusiness.name}</h2>
                        <hr/>

                    <div className="col-sm-5">
                        <h3 className="text-center">Business Details</h3>
                        <div className="list-group">
                            <ul>
                                <li className="list-group-item active">
                                    <h4 className="list-group-item-heading">Business Information:{' '} {this.props.currentBusiness.name}</h4>
                                </li>
                                <li  className="list-group-item text-left">
                                    <div>
                                        <span className="list-group-item-heading"><strong>Name:</strong></span>
                                        <span className="list-group-item-text">{' '}{this.props.currentBusiness.name}</span>
                                    </div>
                                    <div>
                                        <span className="list-group-item-heading"><strong>Location:</strong></span>
                                        <span className="list-group-item-text">{' '}{this.props.currentBusiness.location}</span>
                                    </div>
                                    <div>
                                        <span className="list-group-item-heading"><strong>Category:</strong></span>
                                        <span className="list-group-item-text">{' '}{this.props.currentBusiness.category}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>  
                    </div>
                        
                    <div className="col-sm-6">
                        <h3 className="text-center">Your review	</h3>
                        <form className="form-horizontal" onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="businessrating">Rate(<span className="glyphicon glyphicon-star"></span>):</label>
                                <div className="col-sm-8">
                                    <select name="rating" className="form-control" id="businessrating">
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reviewsummary">Review Summary:</label>
                                <div className="col-sm-8">
                                <input className="form-control" name="reviewsummary" placeholder="Review Summary" id="reviewsummary" maxLength="50" size="50"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="review">Your review:</label>
                                <div className="col-sm-8">
                                <textarea name="reviewdetails" className="form-control" rows="5" id="review"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-warning text-center"><span className="glyphicon glyphicon-plus"></span> Add your review</button>
                        </form>
                    </div>
                    </div>
                </div>
                
			</div>
		);
	}
}

Newreview.propTypes = {
	addReview: PropTypes.func,
	review: PropTypes.object
}

// Find current business based on ID passed in URL
function findCurrentBusiness(businesses, id = -1) {

    // Find business for given id
    return businesses.find(business => {
        return parseInt(business.id, 10) === parseInt(id, 10);
    });
}

const mapStateToProps = (state, ownProps) => {
    let currentBusiness;

	if(state){
		currentBusiness = state.business.businesses.message.length ? findCurrentBusiness(state.business.businesses.message, ownProps.match.params.id) : null;
    }
    
    return {
        currentBusiness: currentBusiness, 
        review: state.review.reviewMessage,
        businessId: ownProps.match.params.id
    }
};


export default withRouter(connect(mapStateToProps, {addReview})(Newreview));