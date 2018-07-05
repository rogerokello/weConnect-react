import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export const ListRows = ({viewbuttonStyle,editbuttonStyle,businesses, deleteRemoteBusiness}) => {
    
    return(
        businesses.map((business, index) =>
            <tr key={business.id}>
                <td>{business.name}</td>
                <td>{business.location}</td>
                <td>{business.category}</td>
        
                <td>
                    <NavLink to={'/reviews/' + business.id + '/' + business.name}>
                        Reviews{' '}
                    </NavLink>{' '}
                </td>
                <td>
                    {business.user_id === parseInt(localStorage.getItem("user_id"),10) ?
                        <span>{''}</span> : 
                        <NavLink className="btn btn-info" role="button" to={'/reviewbusiness/' + business.id}>
                            <span className="glyphicon glyphicon-eye-open"></span>
                            Review{' '}
                        </NavLink> }
                        {' '}
                        {' '}
                        <NavLink style={viewbuttonStyle} className="btn btn-info" role="button" to={'/viewbusiness/' + business.id}>
                            <span className="glyphicon glyphicon-eye-open"></span>
                                View
                        </NavLink>{' '}
                    {business.user_id === parseInt(localStorage.getItem("user_id"),10) ?
                        <NavLink style={editbuttonStyle} className="btn btn-warning" role="button" to={'/editbusiness/' + business.id}>
                            <span className="glyphicon glyphicon-edit"></span>
                            Edit
                        </NavLink> 
                        : 
                        <span>{' '}</span>}{' '}
                    {business.user_id === parseInt(localStorage.getItem("user_id"),10) ?
                        <span onClick={() => deleteRemoteBusiness(business.id)} >
                            <a className="btn btn-danger" role="button">
                                <span className="glyphicon glyphicon-trash"></span>{' '}
                                Delete
                            </a>
                        </span>
                        :
                        <span>{' '}</span>
                    } 
                </td>
            </tr>
            )
    );

}
