import React, { Component } from 'react';

import {Star} from "../Star";


export const generateColumns = (reviews, rendered) => {

    let column;

    for(let counter = 0; counter < 4; counter++){

        column = reviews.pop();

        if (column !== undefined){
            var parsed = parseInt(column.star_rating, 10);

            if (isNaN(parsed)){
                parsed = 5;
            }

            let stars = new Array(parsed);

            //fill all positions with a default value of 5
            stars.fill(5)
            
            rendered.push(
                <Star stars={stars} column={column}/>
            );

        }
    }
}