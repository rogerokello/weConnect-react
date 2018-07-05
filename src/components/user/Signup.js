import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import {NotificationManager} from 'react-notifications';

import { signUp } from "../../actions/userActions";

import {Footer} from "../layout/common/Footer";

export class Signup extends Component {

    componentWillReceiveProps(recieved) {
        if (recieved && recieved.user.message === "You registered successfully. Please log in.") {
            this.props.history.push("/login");
        }else{
            if(recieved && recieved.user.status === "failure"){
                NotificationManager.error(recieved.user.message, "", 5000);
            }
        }
    };

    circularStringify = (object) => {
        let simpleObj = {};
        for (let prop in object) {
            if (!object.hasOwnProperty(prop)) {
                continue;
            }
            if (typeof (object[prop]) === 'object') {
                continue;
            }
            simpleObj[prop] = object[prop];
        }
        return JSON.stringify(simpleObj);

    }

    onSubmit = (e) => {
        e.preventDefault();

        let credentials = {
            username: e.target.elements.username.value,
            password: e.target.elements.password2.value,
            email: e.target.elements.email.value,
        };

        if(credentials.username === ""){
            NotificationManager.error("Please supply a username", "", 5000);
        }

        if(credentials.email === ""){
            NotificationManager.error("Please supply an email address", "", 5000);
        }

        if(credentials.password === "" || e.target.elements.password1.value === ""){
            NotificationManager.error("Please supply both passwords", "", 5000);
        }

        if (e.target.elements.password1.value !== e.target.elements.password2.value){
            NotificationManager.error("Please supply passwords that match", "", 5000);
        }else{
            this.props.signUp(this.circularStringify(credentials));
        }
    }

    render() {
        //window.localStorage.clear();
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">Business Uganda</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink to="/login">
                                    <span className="glyphicon glyphicon-log-in"></span>
                                     Sign in
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-6">
                            <h2 className="">Sign Up</h2><br/>
                            <div>
                                <form id="signupForm" className="form-horizontal" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <div className="col-sm-8">
                                            <input className="form-control" name="username" placeholder="username" id="username" maxLength="100" size="100" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-8">
                                            <input type="email" name="email" className="form-control" placeholder="email@email.com" id="emailad" maxLength="30" size="30" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-8">
                                            <input type="password" name="password1" className="form-control" placeholder="password" id="pwd" maxLength="100" size="100" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-8">
                                            <input type="password" name="password2" className="form-control" placeholder="repeat password" id="pwd2" maxLength="100" size="100" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-default text-center">Sign up</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

Signup.propTypes = {
    signUp: PropTypes.func.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => {
    return {
        user: state.user.signUpMessage
    }
};

export default withRouter(connect(mapStateToProps, { signUp })(Signup));
