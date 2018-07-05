import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {PropTypes} from "prop-types";
import {NotificationManager} from 'react-notifications';
import Loader from 'react-loader-spinner';

import Navbar from "../NavigationBar";
import {clearNewBusinessMessageStatus} from "../../actions/actionCreators";
import {loaderPosition} from "../styles/loaderPosition";
import {addBusiness} from "../../actions/businessActions";
import store from "../../store";

import {stringify} from "../../helpers/circularstringify";

import {Footer} from "../../components/layout/common/Footer";

import {FetchData} from "../loaders/FetchData";

import {Form} from "./Form";

import {Business} from "./layout/Business";

export class Newbusiness extends Component {
	constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

	componentWillReceiveProps(recieved){
		if(recieved && recieved.newBusinessMessage.status==="success"){
			this.props.history.push("/businesslist");
			NotificationManager.info(recieved.newBusinessMessage.message, "", 5000);
			store.dispatch(clearNewBusinessMessageStatus())
		}

		if(recieved && recieved.newBusinessMessage.status === "failure"){
			NotificationManager.info(recieved.newBusinessMessage.message, "", 5000);
			store.dispatch(clearNewBusinessMessageStatus())
		}
	};

    componentWillMount(){
        if(localStorage.getItem("access_token") === null){
            this.props.history.push("/login");
        }
	}

	submitForm = (e) => {
		e.preventDefault();

		let details = {
            name: e.target.elements.name.value,
            category: e.target.elements.category.value,
            location: e.target.elements.location.value,
        };

		this.props.addBusiness(stringify(details))
	}

	render() {

		const loaderPosition = {
			"position": "absolute",
    		"left": "0%",
    		"top": "50%",
    		"width": "100%"
		}

		return (
			
			<div>
				
				<Navbar/>
				<Business
					header={"Register a new business"}
					fetchDataLoader={<FetchData style={loaderPosition} pendingTask={this.props.pendingTask} />}
					form={
						<Form	id={"newbusinessForm"} 
								submitForm={this.submitForm.bind(this)}
								currentBusiness={this.props.currentBusiness}
						/>
					}
				/>
				<Footer />
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
		newBusinessMessage: state.business.newbusinessMessage,
		pendingTask: state.pendingTasksReducer,
    }
};


export default withRouter(connect(mapStateToProps, {addBusiness})(Newbusiness));