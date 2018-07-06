import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export const FetchData = ({pendingTask, style}) => {
    return (
        <div style={style}>
            {pendingTask?
                <span>
                    <Loader type="ThreeDots"
                            color="#00BFFF"
                            height="100"	
                            width="100" 
                    />
                </span>
                :
                <span></span>
            }
        </div>
    )
}