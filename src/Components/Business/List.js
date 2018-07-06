import React, { Component } from "react";
import {withRouter, NavLink} from "react-router-dom";
import {NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";
import Loader from 'react-loader-spinner';

import Navbar from "../Layout/Common/NavigationBar";
import Pagination from "../Business/Layout/Pagination";
import store from "../../store";
import {getAllBusiness, deleteBusiness} from "../../Actions/businessActions";
import {clearDeleteMessageStatus} from "../../Actions/actionCreators";

import {Footer} from "../../Components/Layout/Common/Footer";

import {FetchData} from "../Loaders/FetchData";
import {generateBusinessesByPage} from "../../Helpers/generateBusinessesByPage"

import {ListRows} from "./Layout/ListRows";
import {TableList} from "./Layout/TableList";

import {
	viewbuttonStyle,
	editbuttonStyle,
	loaderPosition
} from "./Layout/Styles/styles";




export class Businesslist extends Component {

	
	componentWillReceiveProps(recieved){
		console.log("Component Recieved Props")
		if(recieved && recieved.deletemessage.status==="success"){
			NotificationManager.success("Business Deleted successfuly", "", 5000);
			store.dispatch(clearDeleteMessageStatus());
		}

		if(recieved && recieved.business.status === "failure"){
			NotificationManager.info(recieved.business.message, "", 5000);
		}

		if(store.getState().connection.tokenExpired===true){
			NotificationManager.success("Please login again to refresh your credentials", "", 5000);
			this.props.history.push("/login");
		}

	}


  	componentDidMount(){
		if(localStorage.getItem("access_token") === null){
			this.props.history.push("/login");
		}
		
		//Get all the businesses
		this.props.getAllBusiness();

  	}


  	deleteBusinessRemote(id){

		const popup = window.confirm('Are you sure you want to delete this business?'); 
		
		if (popup === true) {
			this.props.deleteBusiness(id);
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
			<div id="tableList">
				<Navbar {...this.props}/>
					
				<TableList
					loadingStatus={<FetchData pendingTask={this.props.pendingTask} style={loaderPosition} />}
					listRows={<ListRows 
						viewbuttonStyle={viewbuttonStyle}
						editbuttonStyle={editbuttonStyle}
						businesses={businesses}
						deleteRemoteBusiness={this.deleteBusinessRemote.bind(this)}
					/>}
					header={"Current list of Ugandan Businesses"}
				/>
					
				{ /* show pagination if there are more than 1 page */
                    this.props.pages > 1 && <Pagination has_next={this.props.has_next} has_prev={this.props.has_prev} pages={this.props.pages} currentPage={this.props.currentPage} getBusiness={this.props.getAllBusiness}/>
				}

				<Footer />
			</div>
		);
	}
}

Businesslist.propTypes = {
	deletemessage: PropTypes.object,
	business: PropTypes.array,
}



const mapStateToProps = (state, ownProps) => {
	console.log(state)
	// Set page number to 1 if no number in url params
	let pageNo = ownProps.match.params.pageNo || 1;
	let businesses = generateBusinessesByPage(state.business.businesses.message, pageNo);
	let pages;

	let has_next="";
	let has_prev="";
	let total_pages="";
	let total_number_of_items="";
	let current_page=""

	if(state.business.businesses){
		has_next = state.business.businesses.has_next;
		has_prev = state.business.businesses.has_prev;
		total_pages = state.business.businesses.total_pages;
		total_number_of_items = state.business.businesses.total_number_of_items;
		current_page = state.business.businesses.current_page;
	}

	if (state.business.businesses && state.business.businesses.message) {
		if (parseInt(total_number_of_items, 10) === NaN){
			pages = 1
		}else{
			pages = Math.ceil(parseInt(total_number_of_items, 10) / 6);
		}
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
		tokenExpired: state.connection.tokenExpired,
		pendingTask: state.pendingTasksReducer,
		allbusinessinformation: state.business.businesses,
		has_next: has_next,
		has_prev: has_prev,
		total_pages,
		total_number_of_items,
		current_page,
    }
};


export default withRouter(connect(mapStateToProps, {getAllBusiness, deleteBusiness})(Businesslist));
