import React, { Component } from 'react';

export const Reviews = ({FetchData, ReviewHeader, rendered}) => {
    return (
        <div className="container-fluid text-center">
            {FetchData}
            {ReviewHeader}
            {rendered}    
        </div>
    )
}