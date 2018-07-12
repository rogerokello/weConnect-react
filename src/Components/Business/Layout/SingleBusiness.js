import React, { Component } from 'react';

export const SingleBusiness = ({name, location, category}) => {
    return (
        <div className="container-fluid text-center">    
            <div className="row content">
                <div className="col-sm-3">
                </div>
                <div className="col-sm-6">
                    <h2 className="text-center">Business Details</h2>
                    <div className="list-group">
                        <ul>
                            <li className="list-group-item active">
                                <h4 className="list-group-item-heading">
                                    Business Information: {name}
                                </h4>
                            </li>
                            <li  className="list-group-item text-left">
                                <div>
                                    <span className="list-group-item-heading">
                                        <strong>Name: </strong>
                                    </span>
                                    <span className="list-group-item-text">
                                        {name}
                                    </span>
                                </div>
                                <div>
                                    <span className="list-group-item-heading">
                                        <strong>Location: </strong>
                                    </span>
                                    <span className="list-group-item-text">
                                        {location}
                                    </span>
                                </div>
                                <div>
                                    <span className="list-group-item-heading">
                                        <strong>Category: </strong>
                                    </span>
                                    <span className="list-group-item-text">
                                        {category}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                </div>
            </div>
        </div>
    );
}