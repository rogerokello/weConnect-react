import React, { Component } from 'react';

export const TableList = ({loadingStatus, listRows, header}) => {
    return (
        <div className="container">
            {loadingStatus}
            <div className="row">
                <div className="col-sm-12">
            
                    <h2 className="text-center">
                        {header}
                    </h2>
                
                    <div className="table-responsive table-stripped">          
                        <table className="table">
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
                </div>
            </div>
        </div>
    );

}
