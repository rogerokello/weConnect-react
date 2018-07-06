import React, { Component } from 'react';

export const Reviews = ({FetchData, ReviewHeader, rendered}) => {
    return (
        <div className="container-fluid text-center">
            {FetchData}
            {ReviewHeader}
            {rendered.length? rendered: <h2><strong><em>Sorry, No reviews currently available</em></strong></h2>}    
        </div>
    )
}