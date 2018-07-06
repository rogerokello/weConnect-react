import React, { Component } from 'react';

export const Business = ({header,fetchDataLoader, form}) => {
    return(
        <div className="container-fluid text-center">
            {fetchDataLoader}
    
            <div className="row content">
                <div className="col-sm-3">
                </div>
                <div className="col-sm-6">
                    <h2 className="text-center">{header}</h2>
                    {form}   
                </div>
                <div className="col-sm-3">
                </div>
            </div>
        </div>
    );
}
