import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import {NotificationManager} from 'react-notifications';

import { resetYourPassword } from "../../actions/userActions";

import {Navbar} from "../NavigationBar";

import {stringify} from "../../helpers/circularstringify";

import {Footer} from "../layout/common/Footer";

export class AccountInfo extends Component {

    componentWillReceiveProps(recieved) {
        if (recieved && recieved.user.message === "Password reset Successful") {
            NotificationManager.info("Password reset successfuly", "", 5000);
        }else{
            if(recieved && recieved.user.status === "failure"){
                NotificationManager.error(recieved.user.message, "", 5000);
            }
        }
    };


    onSubmit = (e) => {
        e.preventDefault();
        let credentials = {
            previous_password: e.target.elements.password.value,
            new_password: e.target.elements.password1.value,
        };

        if(credentials.password === "" || e.target.elements.password1.value === ""){
            NotificationManager.error("Please supply both passwords", "", 5000);
        }

        if (e.target.elements.password1.value !== e.target.elements.password2.value){
            NotificationManager.error("Please supply passwords that match", "", 5000);
        }else{
            this.props.resetYourPassword(stringify(credentials));
        }
    }

    render() {
        return (
            <div>
                <Navbar {...this.props}/>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-6">
                            <h2 className="">Account Information</h2><br/>
                            <div>
                                <form id="accountInfoForm" className="form-horizontal" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <div className="col-sm-8">
                                            <input className="form-control" name="username" value={localStorage.getItem("username")} id="username" maxLength="100" size="100" disabled/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-8">
                                            <input type="email" name="email" className="form-control" value={localStorage.getItem("email")} id="emailad" maxLength="30" size="30" disabled/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-8">
                                            <input type="password" name="password" className="form-control" placeholder="previous password" id="pwd" maxLength="100" size="100" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-8">
                                            <input type="password" name="password1" className="form-control" placeholder="new password" id="pwd1" maxLength="100" size="100" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-8">
                                            <input type="password" name="password2" className="form-control" placeholder="repeat password" id="pwd2" maxLength="100" size="100" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-default text-center">Reset Password</button>
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

AccountInfo.propTypes = {
    resetYourPassword: PropTypes.func.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => {
    return {
        user: state.user.resetPasswordMessage
    }
};

export default withRouter(connect(mapStateToProps, { resetYourPassword })(AccountInfo));
