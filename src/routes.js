import React, { Component } from "react";
import {BrowserRouter as Router , Route} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';

import Signup from "./components/user/Signup";//"./components/signup";
import Signin from "./components/user/Signin";//"./components/signin";
import Logout from "./components/user/Logout";//"./components/logout";
import BusinessList from "./components/business/List";//"./components/businesslist";
import Newbusiness from "./components/business/New";//"./components/newbusiness";
import Editbusiness from "./components/business/Edit";//"./components/editbusiness";
import Viewbusiness from "./components/business/View";//"./components/viewbusiness";
import AccountInfo from "./components/user/AccountInfo";//"./components/AccountInfo";
import Newreview from "./components/review/New";//"./components/reviewbusiness";
import Reviewlist from "./components/review/List";//"./components/reviewlist";
import Navbar from "./components/NavigationBar";//"./components/navigationbar";

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