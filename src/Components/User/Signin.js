import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types';
import {NotificationManager} from 'react-notifications';
import Loader from 'react-loader-spinner';

import { signIn } from "../../Actions/userActions";
import { clearLoginMessages } from "../../Actions/actionCreators";
import store from "../../store";

import {Footer} from "../Layout/Common/Footer";


export class Signin extends Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(recieved) {

        if(recieved && recieved.user.status === "failure"){
            NotificationManager.error(recieved.user.message, "", 5000);
            store.dispatch(clearLoginMessages());
        }
        console.log('***', recieved);

        if (recieved && recieved.user.status === "success") {
            NotificationManager.success("You logged in successfully", "", 5000);
            localStorage.clear();

            localStorage.setItem('access_token', recieved.user.access_token);
            localStorage.setItem('user_id', recieved.user.id);
            localStorage.setItem('username', recieved.user.username);
            localStorage.setItem('email', recieved.user.email);
            store.dispatch(clearLoginMessages());
            this.props.history.push("/businesslist");
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
            password: e.target.elements.password.value,
        };
        
        if(credentials.username && credentials.password){
            this.props.signIn(this.circularStringify(credentials));
        }else{
            NotificationManager.error("Please supply a username and password", "", 5000);
        }

        
    }

    render() {
        //window.localStorage.clear();
        const loaderStyle = {
            'display': 'inline-block',
			"zIndex": -1
        };

        
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">Business Uganda</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink to="/index">
                                    <span className="glyphicon glyphicon-plus"></span>
                                    <span style={{marginRight:'12px'}} className="glyphicon glyphicon-user"></span>
                                    {'  '} Sign up
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
                            <h2 className="">Sign In</h2><br/>
                            <div>
                            {this.props.pendingTask?
                                <div style={loaderStyle}>
                                    <Loader type="ThreeDots"
                                            color="#00BFFF"
                                            height="100"	
                                            width="100" 
                                    />
                                </div>
                                :
                                <span></span>
                            }
                            <form id="signinform" className="form-horizontal" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <div className="col-sm-8">
                                        <input className="form-control" name="username" placeholder="username" id="username" maxLength="100" size="100" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-8">
                                        <input type="password" name="password" className="form-control" placeholder="password" id="pwd" maxLength="100" size="100" />
                                    </div>
                                </div>
                                <button id="signinbtn" type="submit" className="btn btn-default text-center">Sign in</button>
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

Signin.propTypes = {
    signIn: PropTypes.func,
    user: PropTypes.object
}

const mapStateToProps = state => {
    return {
        user: state.user.signInMessage,
        pendingTask: state.pendingTasksReducer,
    }
};

export default (connect(mapStateToProps, { signIn })(withRouter(Signin)));
