import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";
import Loader from 'react-loader-spinner';

import Navbar from "../Layout/Common/NavigationBar";
import {getAllReviews} from "../../Actions/reviewActions";
import {loaderPosition} from "../Styles/loaderPosition";
import {generateColumns} from "./Helpers/generateColumns";

import {Star} from "./Star";
import {Footer} from "./Layout/Footer";
import {FetchData} from "../Loaders/FetchData";
import {ReviewHeader} from "./Layout/ReviewHeader";
import {Reviews} from "./Layout/Reviews";

import {validateUser} from "../../Helpers/validateUser";


export class Reviewlist extends Component {

    componentWillMount(){

        if(validateUser() !== true){
            this.props.history.push("/login");
        }
        
        this.props.getAllReviews(this.props.reviewId);

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
            {generateColumns(reviews, rendered)};
        }
		
		return (
			<div>
				<Navbar />

                <Reviews 
                    FetchData={<FetchData style={loaderPosition} pendingTask={this.props.pendingTask} />} 
                    ReviewHeader={<ReviewHeader businessName={this.props.businessName} />}
                    rendered={rendered}
                />
                <hr/>
                <Footer />
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
        reviewId: ownProps.match.params.id,
        businessName: ownProps.match.params.name,
        pendingTask: state.pendingTasksReducer,
    }
};


export default withRouter(connect(mapStateToProps, {getAllReviews})(Reviewlist));
