import React, { Component } from "react";
import {BrowserRouter as Router , Route} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';

import Signup from "./Components/User/Signup";
import Signin from "./Components/User/Signin";
import Logout from "./Components/User/Logout";
import BusinessList from "./Components/Business/List";
import Newbusiness from "./Components/Business/New";
import Editbusiness from "./Components/Business/Edit";
import Viewbusiness from "./Components/Business/View";
import AccountInfo from "./Components/User/AccountInfo";
import Newreview from "./Components/Review/New";
import Reviewlist from "./Components/Review/List";
import Navbar from "./Components/Layout/Common/NavigationBar";

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
					<Route path="/navigationbar" exact  component={Navbar}/>
					<Route path="/accountinfo" exact  component={AccountInfo}/>
					<Route path="/businesslist/:pageNo?"  component={BusinessList}/>
					<Route path="/newbusiness" exact  component={Newbusiness}/>
					<Route path="/editbusiness/:id" exact  component={Editbusiness}/>
					<Route path="/viewbusiness/:id" exact  component={Viewbusiness}/>
					<Route path="/reviewbusiness/:id" exact  component={Newreview}/>
					<Route path="/reviews/:id/:name" exact component={Reviewlist}/>
				</div>
				<NotificationContainer/>
				</div>
			</Router>
		);
	}
}

export default Routes;