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

export const ExampleUncontrolledRating1 = ()=> <UnRating value={1}/>
export const ExampleUncontrolledRating2 = ()=> <UnRating value={2}/>
export const ExampleUncontrolledRating3 = ()=> <UnRating  value={3}/>
export const ExampleUncontrolledRating4 = ()=> <UnRating value={4}/>
export const ExampleUncontrolledRating5 = ()=> <UnRating value={5}/>

export const EditUncontrolledRating = ()=>{
    const [rating, setRating]=useState<RatingStarType>(0);
   return <UnRating  value={rating} />
}