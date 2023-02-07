import React, {useState} from 'react';


import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select
 }
//
// const callbackValue=action('My clicked')
//
export const SelectTest = ()=> {
    const [vape, setVape] = useState([
        {id:1, name:'Alpaca'},
        {id:2, name:'Husky'},
        {id:3, name:'Paradice'},
        {id:4, name:'Smoke Kitchen'},
    ])
const onChange = (value:any)=>{


}
  return  <Select value={vape[0].name} onChange={onChange} items={vape}/>
}



//
// export const EditRating = ()=>{
//     const [rating, setRating]=useState<RatingStarType>(0);
//     return <Rating  value={rating} callback={setRating}/>
//
