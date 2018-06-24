import React, { Component } from "react";
import {BrowserRouter as Router , Route} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';

import Signup from "./components/signup";
import Signin from "./components/signin";
import Logout from "./components/logout";
import BusinessList from "./components/businesslist";
import Newbusiness from "./components/newbusiness";
import Editbusiness from "./components/editbusiness";
import Viewbusiness from "./components/viewbusiness";
import Newreview from "./components/reviewbusiness";
import Reviewlist from "./components/reviewlist";

class Routes extends Component {
	render() {
		return (
			<Router>
				<div>
				<div>
					<Route path="/" exact component={Signin}/>
					<Route path="/login" exact component={Signin}/>
					<Route path="/index" exact  component={Signup}/>
					<Route path="/logout" exact  component={Logout}/>
					<Route path="/businesslist/:pageNo?"  component={BusinessList}/>
					<Route path="/newbusiness" exact  component={Newbusiness}/>
					<Route path="/editbusiness/:id" exact  component={Editbusiness}/>
					<Route path="/viewbusiness/:id" exact  component={Viewbusiness}/>
					<Route path="/reviewbusiness/:id" exact  component={Newreview}/>
					<Route path="/reviews/:id" exact component={Reviewlist}/>
				</div>
				<NotificationContainer/>
				</div>
			</Router>
		);
	}
}

export default Routes;