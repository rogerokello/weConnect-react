import React, { Component } from 'react';

export const TableList = ({loadingStatus, listRows, header}) => {
    return (
        <div className="container">
            {loadingStatus}
            <h2 className="text-center">
                        {header}
            </h2>
            <br/>
            <div className="row">
                <div className="col-sm-2"></div>
                    <div className="col-sm-8">          
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Category</th>
                                    <th>Reviews</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listRows}
                            </tbody>
                        </table>
                    </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    );

}
