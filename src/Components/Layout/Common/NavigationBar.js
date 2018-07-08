import React, { Component } from "react";
import {withRouter, NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import { PropTypes } from 'prop-types';
import {NotificationManager} from 'react-notifications';

import {searchForBusiness, getAllBusiness} from "../../../Actions/businessActions";//"../actions/businessActions";


export class Navbar extends Component {

	constructor(props){
		super(props)
		this.submitSearch = this.submitSearch.bind(this);
	}

	componentDidUpdate(){
		// if(this.props.storestate.connection.tokenexpired === true){
		// 	NotificationManager.info("Please log in again, session expired", "", 5000);
		// 	this.props.history.push("/login");
		// }
	}

	submitSearch = (e) => {

		e.preventDefault();
		let searchstring = e.target.elements.search.value;
		
	
		if(searchstring.length > 0){
			this.props.history.push("/businesslist");
			this.props.searchForBusiness(e.target.elements.search.value);	
		}else{
			NotificationManager.info("Please supply a search string", "", 5000);
		}
	
	}
    
	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">

						<div className="navbar-header">
							<span className="navbar-brand">Business Uganda</span>
						</div>

						<ul className="nav navbar-nav">
							<li>
								<span className="btn btn-lg">
									<NavLink to="/businesslist" >
										<span className="glyphicon glyphicon-list"></span> <span onClick={() => this.props.getAllBusiness()}>Businesses</span> 
										
									</NavLink>
								</span>
							</li>
						</ul>

						<ul className="nav navbar-nav">
							<li>
								<span className="btn btn-lg">
									<NavLink to="/newbusiness" >
										<span className="glyphicon glyphicon-plus"></span> Create Business 
									</NavLink>
								</span>
                
							</li>
						</ul>

						<form id="searchform" className="navbar-form navbar-left" onSubmit={this.submitSearch}>
							<div className="form-group">
								<input id="searchvalue"  name="search" type="text" className="form-control" placeholder="Search for business, location or category" maxLength="30" size="40"/>
							</div>{' '}
							<button type="submit" className="btn btn-default">Search</button>
						</form>
						
						<ul  className="nav navbar-nav navbar-right">
							<li>
								<div className="navbar-header">
									<span className="navbar-brand">Welcome <strong><em>{localStorage.getItem("username")}</em></strong></span>
								</div>
							</li>
							<li className="dropdown">
								<a className="dropdown-toggle" data-toggle="dropdown">
									<span className="glyphicon glyphicon-user">
									</span><span className="glyphicon glyphicon-triangle-bottom"></span>
								</a>
								<ul className="dropdown-menu">
									<li>
										<NavLink to="/accountinfo" >
											<span className="glyphicon glyphicon-info-sign"></span> Account Information
										</NavLink>
									</li>
									<li>
										<NavLink to="/logout" >
											<span className="glyphicon glyphicon-log-out"></span> Logout
										</NavLink>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);

	}
}

Navbar.propTypes = {
	searchForBusiness: PropTypes.func,
	getAllBusiness: PropTypes.func,
    storestate: PropTypes.object
}

const mapStateToProps = state => {
    return {
        storestate: state
    }
};

export default withRouter(connect(mapStateToProps, {searchForBusiness, getAllBusiness})(Navbar));