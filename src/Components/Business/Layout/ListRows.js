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
                            {'    '}Review{' '}
                        </NavLink> }
                        {' '}
                        {' '}
                        <a style={viewbuttonStyle} className="btn btn-info" role="button" data-toggle="modal" data-target={"#myModal"+index}>
                            <span style={{marginRight:'5px'}} className="glyphicon glyphicon-eye-open"></span>
                                {' '}View
                        </a>{' '}

                        <div class="modal fade" id={"myModal"+index} role="dialog">
                            <div class="modal-dialog modal-sm">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Details</h4>
                                    </div>
                                    <div class="modal-body">
                                        <p>Name: {business.name}</p>
                                        <p>Category: {business.category}</p>
                                        <p>Location: {business.location}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    {business.user_id === parseInt(localStorage.getItem("user_id"),10) ?
                        <NavLink style={editbuttonStyle} className="btn btn-warning" role="button" to={'/editbusiness/' + business.id}>
                            <span style={{marginRight:'5px'}} className="glyphicon glyphicon-edit"></span>
                            {'   '}Edit
                        </NavLink> 
                        : 
                        <span>{'   '}</span>}{'    '}
                    {business.user_id === parseInt(localStorage.getItem("user_id"),10) ?
                        <span onClick={() => deleteRemoteBusiness(business.id)} >
                            <a className="btn btn-danger" role="button">
                                <span style={{marginRight:'5px'}} className="glyphicon glyphicon-trash"></span>{' '}
                                {'    '}Delete
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
