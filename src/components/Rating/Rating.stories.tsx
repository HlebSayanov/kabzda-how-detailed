import React, {useState} from 'react';

import {Rating, RatingStarType} from './Rating';
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Rating',
    component: Rating,

}

const callbackValue=action('My clicked')

export const ExampleRating = ()=> <Rating value={0} callback={callbackValue}/>

export const EditRating = ()=>{
    const [rating, setRating]=useState<RatingStarType>(0);


   return <Rating  value={rating} callback={setRating}/>
}
