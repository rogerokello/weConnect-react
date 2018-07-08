import { Component } from "react";
import {withRouter} from "react-router-dom";
import { PropTypes} from "prop-types";
import {connect} from "react-redux";
 

import {logOut} from "../../Actions/userActions";
import store from "../../store";

class Logout extends Component {

	componentWillMount(){
		window.localStorage.clear();
		this.props.history.push("/login");
	}

	render() {
		return null;
	}
}

Logout.propTypes = {
	logOut: PropTypes.func.isRequired,
	user:PropTypes.object
};

const mapStateToProps = state => {
	return {
		user: state.user.LogoutMessage
	};
};

export default withRouter(connect(mapStateToProps, {logOut})(Logout));
