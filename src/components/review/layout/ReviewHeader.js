import React, { Component } from 'react';

export const ReviewHeader = ({businessName}) => {
    return (
        <h2 className="text-center">Customer reviews for: {businessName}</h2>
    )
}