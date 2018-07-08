import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import {NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";
import Loader from 'react-loader-spinner';

import store from "../../store";
import {loaderPosition} from "../Styles/loaderPosition";
import Navbar from "../Layout/Common/NavigationBar";
import {clearEditMessageStatus} from "../../Actions/actionCreators";
import {editBusiness} from "../../Actions/businessActions";

import {Footer} from "../../Components/Layout/Common/Footer";

import {FetchData} from "../Loaders/FetchData";

import {Business} from "./Layout/Business";

import {Form} from "./Form";


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
			NotificationManager.info(recieved.editMessage.message, "", 5000);
			store.dispatch(clearEditMessageStatus());
		}

		if(recieved && recieved.editMessage.status === "failure"){
			NotificationManager.info(recieved.editMessage.message, "", 5000);
			store.dispatch(clearEditMessageStatus());
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

			this.props.editBusiness(
				JSON.stringify(businesslist),
				this.state.currentBusiness.id
			);
		}
	}

	render() {

		return (
			
			<div>
				
				<Navbar/>


				<Business
					header={"Edit business"}
					fetchDataLoader={<FetchData style={loaderPosition} pendingTask={this.props.pendingTask} />}
					form={
						<Form	id="editBusinessForm" 
								submitForm={this.submitForm.bind(this)}
								handleEdit={this.handleEdit.bind(this)}
								currentBusiness={this.props.currentBusiness}
								formType={"Edit"} 
						/>
					}
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
		editMessage: state.business.editbusinessMessage,
		pendingTask: state.pendingTasksReducer,
    }
};


export default withRouter(connect(mapStateToProps, {editBusiness})(Editbusiness));