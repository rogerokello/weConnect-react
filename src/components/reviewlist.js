import React, { Component } from "react";
import {withRouter} from "react-router-dom";

import {connect} from 'react-redux';

import {PropTypes} from "prop-types";


import Navbar from "./navigationbar";

import {getAllReviews} from "../actions/reviewActions";


export class Reviewlist extends Component {

    componentWillMount(){

        if(localStorage.getItem("access_token") === null){
            this.props.history.push("/login");
        }
        this.props.getAllReviews(this.props.reviewId);

    }

    generateColumns = (reviews, rendered) => {

        let column;

        for(let counter = 0; counter < 4; counter++){

            column = reviews.pop();

            if (column !== undefined){
                var parsed = parseInt(column.star_rating, 10);

                if (isNaN(parsed)){
                    parsed = 5;
                }

                let stars = new Array(parsed);

                //fill all positions with a default value of 5
                stars.fill(5)

                rendered.push(
                    <div className="col-sm-3">
                        <div className="list-group">
                            <ul>
                                <li className="list-group-item active">
                                    <h4 className="list-group-item-heading">
                                        Star Rating: {stars.map((star, index) =>
                                                    <span className="glyphicon glyphicon-star"> </span>)
                                        }
                                    </h4>
                                </li>
                                <li  className="list-group-item text-left">
                                    <div>
                                        <span className="list-group-item-heading"><strong>Rating:</strong></span>
                                        <span className="list-group-item-text">{' '}{column.star_rating}{' '}stars</span>
                                    </div>
                                    <div>
                                        <span className="list-group-item-heading"><strong>Reviewer:</strong></span>
                                        <span className="list-group-item-text">Roger Okello</span>
                                    </div>
                                    <div>
                                        <span className="list-group-item-heading"><strong>Review summary:</strong></span>
                                        <span className="list-group-item-text">{' '}{column.review_summary}</span>
                                    </div>
                                    <div>
                                        <span className="list-group-item-heading"><strong>Review:</strong></span>
                                        <span className="list-group-item-text">{' '}{column.review_description}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                );

            }
        }
    }


	render() {
		
		//Spread to extract all reviews from props
		//into a dictionary
		const reviews_static = Object.values({...this.props.reviews.message});


        var reviews = reviews_static;

        var length = (reviews.length/4);
        
        var rendered = [];

        
        // Generate what you will render
        // replace the reference for rendered in
        // memory
        for(let counter = 0; counter < Math.ceil(length); counter++){
            {this.generateColumns(reviews, rendered)};
        }
		
		return (
			<div>
				<Navbar />
                <div className="container-fluid text-center"> 
                    {/* <!-- Trigger the modal with a link within the company name --> */}
    	            <h2 className="text-center">Customer reviews for: <a data-toggle="modal" data-target="#myModal">Xedrox</a></h2>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">

                            {/* <!-- Modal content--> */}
                            <div className="list-group">
                                <ul>
                                    <li className="list-group-item active">
                                        <h4 className="list-group-item-heading">Business Information: Xedrox</h4>
                                    </li>
                                    <li  className="list-group-item text-left">
                                        <div>
                                            <span className="list-group-item-heading"><strong>Name:</strong></span>
                                            <span className="list-group-item-text">Xedrox limited</span>
                                        </div>
                                        <div>
                                            <span className="list-group-item-heading"><strong>Location:</strong></span>
                                            <span className="list-group-item-text">Lira</span>
                                        </div>
                                        <div>
                                            <span className="list-group-item-heading"><strong>Category:</strong></span>
                                            <span className="list-group-item-text">Information Technology</span>
                                        </div>
                                        <div>
                                            <span className="list-group-item-heading"><strong>Reviews:</strong></span>
                                            <a href="listexistingbusinessreviews.html" className="list-group-item-text">
                                            <span className="badge">5</span> Reviews
                                            </a>
                                        </div>
                                        <div>
                                            <span className="list-group-item-heading"><strong>Star Rating:</strong></span>
                                            <a className="list-group-item-text">
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star-empty"></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li  className="list-group-item">
                                        <a href="newexistingbusinessreview.html" className="btn btn-info" role="button">
                                            <span className="glyphicon glyphicon-star"></span> Review 
                                        </a>
                                        <a href="editexistingbusiness.html" className="btn btn-warning" role="button">
                                            <span className="glyphicon glyphicon-edit"></span> Edit 
                                        </a>
                                        <a className="btn btn-danger" role="button">
                                            <span className="glyphicon glyphicon-trash"></span> Delete 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    {rendered}    
                </div>
                <hr/>
				<footer className="container-fluid text-center" data-offset-bottom="10">
					<p>&copy; Roger Okello</p>
				</footer>
			</div>
		);
	}
}

Reviewlist.propTypes = {
	reviewId: PropTypes.string,
	reviews: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: state.review.reviews,
        reviewId: ownProps.match.params.id
    }
};


export default withRouter(connect(mapStateToProps, {getAllReviews})(Reviewlist));
