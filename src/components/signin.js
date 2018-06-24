import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types';
import {NotificationManager} from 'react-notifications';

import { signIn } from '../actions/userActions'


export class Signin extends Component {
    componentWillReceiveProps(recieved) {

        if (recieved && recieved.user.status === "success") {
            NotificationManager.success("You logged in successfully", "", 5000);
            localStorage.setItem('access_token', recieved.user.access_token);
            localStorage.setItem('user_id', recieved.user.id);
            this.props.history.push("/businesslist");
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
            password: e.target.elements.password.value,
        };

        if(credentials.username && credentials.password){
            this.props.signIn(this.circularStringify(credentials));
        }else{
            NotificationManager.error("Please supply a username and password", "", 5000);
        }

        
    }

    render() {
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
                                    <span className="glyphicon glyphicon-plus"></span><span className="glyphicon glyphicon-user"></span> Sign up
                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid text-center">
                    <div className="row content">
                        <div className="col-sm-3">
                        </div>
                        <div className="col-sm-6">
                            <h2 className="text-center">Sign In</h2>
                            <div>
                                <form id="signinform" className="form-horizontal" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" htmlFor="username">Username:</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" name="username" placeholder="username" id="username" maxLength="100" size="100" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" htmlFor="pwd">Password: </label>
                                        <div className="col-sm-10">
                                            <input type="password" name="password" className="form-control" placeholder="password" id="pwd" maxLength="100" size="100" />
                                        </div>
                                    </div>
                                    <button id="signinbtn" type="submit" className="btn btn-default text-center">Sign in</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                </div>


                <footer className="container-fluid text-center" data-offset-bottom="10">
                    <p>&copy; Roger Okello</p>
                </footer>
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
    }
};

export default withRouter(connect(mapStateToProps, { signIn })(Signin));
