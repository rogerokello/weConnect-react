import React, { Component } from "react";

export const Star = ({stars, column}) => {
    
return (
<div className="col-sm-3">
    <div className="list-group">
        <ul>
            <li className="list-group-item active">
                <h4 className="list-group-item-heading">
                    Star Rating: {stars.map((star, index) =>
                                <span key={index} className="glyphicon glyphicon-star"> </span>)
                    }
                </h4>
            </li>
            <li  className="list-group-item text-left">
                <div>
                    <span className="list-group-item-heading"><strong>Rating: </strong></span>
                    <span className="list-group-item-text">{' '}{column.star_rating}{' '}stars</span>
                </div>
                <div>
                    <span className="list-group-item-heading"><strong>Reviewer: </strong></span>
                    <span className="list-group-item-text">Roger Okello</span>
                </div>
                <div>
                    <span className="list-group-item-heading"><strong>Review summary: </strong></span>
                    <span className="list-group-item-text">{' '}{column.review_summary}</span>
                </div>
                <div>
                    <span className="list-group-item-heading"><strong>Review: </strong></span>
                    <span className="list-group-item-text">{' '}{column.review_description}</span>
                </div>
            </li>
        </ul>
    </div>
</div>
)
}