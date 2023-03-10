import React, {useState} from 'react';
import {Select} from "../components/Select/Select";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select for Memo',
    component: Select
 }
//
// const callbackValue=action('My clicked')
//
const allCity = [
    {id:1, country: 'Belarus', city:['Minsk','Mogilev', 'Vitebsk', 'Gomel'], population:9800000 },
    {id:2, country: 'Russia ', city:['Moskow','Rostov', 'Ecaterenburg', 'Cheliabinsk'], population:20000000 },
    {id:3, country: 'Ukraine ', city:['Kiev','Harkov', 'Odessa', 'Mariopel'], population:50000000 },

]

export const SelectMemo = ()=> {
    const [city, setCity] = useState(allCity)
const onChange = (value:any)=>{
setCity(value)

}
  // return  <Select value={city[0].country} onChange={onChange} items={city}/>
}



//
// export const EditRating = ()=>{
//     const [rating, setRating]=useState<RatingStarType>(0);
//     return <Rating  value={rating} callback={setRating}/>
//
