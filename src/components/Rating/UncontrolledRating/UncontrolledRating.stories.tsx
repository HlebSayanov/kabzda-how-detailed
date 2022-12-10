import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UnRating} from "./UnRating";
import {Rating, RatingStarType} from "../Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UnRating',
    component: UnRating

}

const callbackValue=action('My clicked rating')

export const ExampleRating = ()=> <UnRating/>

export const EditRating = ()=>{
    const [rating, setRating]=useState<RatingStarType>(0);
   return <UnRating  value={rating} callback={setRating}/>
}