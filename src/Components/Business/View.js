import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";

import {Navbar} from "../Layout/Common/NavigationBar";
import {
    deleteBusiness,
    getAllBusiness,
    getOneBusiness
} from "../../Actions/businessActions";

import {Footer} from "../Layout/Common/Footer";
import { SingleBusiness } from "./Layout/SingleBusiness";


export class Viewbusiness extends Component {

    componentWillMount(){
        if(localStorage.getItem("access_token") === null){
          this.props.history.push("/login");
        }
    
        //Dispatch action to get all the businesses
        this.props.getAllBusiness();
    }

	render() {
		return (		
			<div>	
				<Navbar/>

                <SingleBusiness 
                    name={this.props.currentBusiness.name}
                    location={this.props.currentBusiness.location}
                    category={this.props.currentBusiness.category}
                />
                
                <Footer/>
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
    };
};

export default withRouter(connect(mapStateToProps, {deleteBusiness, getAllBusiness, getOneBusiness})(Viewbusiness));