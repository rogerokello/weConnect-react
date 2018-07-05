import React, { Component } from 'react';

export const Form = ({id, submitForm, handleEdit="", currentBusiness, formType="Add"}) => {
    console.log("Current Business",submitForm);
    return (
        <form className="form-horizontal" id={id} onSubmit = {submitForm}>
                                    
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="businessname">Name:</label>
                <div className="col-sm-10">
                    {formType==="Edit"?
                        <input className="form-control" value={currentBusiness.name} onChange={handleEdit} name="name" placeholder="Business Name" id="businessname" maxLength="100" size="100"/>:
                        <input className="form-control" name="name" placeholder="Business Name" id="businessname" maxLength="100" size="100"/>
                    }
                </div>
            </div>
            
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="businesslocation">Location:</label>
                <div className="col-sm-10">
                    {formType==="Edit"?
                        <input className="form-control" value={currentBusiness.location} onChange={handleEdit} name="location" placeholder="Business Location" id="businesslocation" maxLength="100" size="100"/>
                        :
                        <input className="form-control" name="location" placeholder="Business Location" id="businesslocation" maxLength="100" size="100"/>
                    }
                </div>
            </div>
            
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="businesscategory">Category:</label>
                <div className="col-sm-10">
                    {formType==="Edit"?
                        <input className="form-control" value={currentBusiness.category} onChange={handleEdit} name="category" placeholder="Business Category" id="businesscategory" maxLength="100" size="100"/>
                        :
                        <input className="form-control" name="category" placeholder="Business Category" id="businesscategory" maxLength="100" size="100"/>
                    }
                </div>
            </div>
            {formType==="Edit"?
                <button id="edit-button" type="submit" className="btn btn-warning text-center"><span className="glyphicon glyphicon-edit"></span> Edit</button>:
                <button id="add-button" type="submit" className="btn btn-success text-center"><span className="glyphicon glyphicon-plus"></span> Register</button>
            }
            
        </form>
    );
}