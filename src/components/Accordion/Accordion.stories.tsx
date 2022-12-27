import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Accordion',
    component: Accordion,

}

const callbackValue=action('click title Accordion')
const onClickCallback=action('click title Accordion')

const valueUser = [
    {name:'Hleb',value:1},
    {name:'Yuriy',value:2},
    {name:'Alici',value:3},
    {name:'Havi',value:4},
]

// export const UnMenu = ()=> <Accordion titleValue={'Menu'} collapsed={true} callback={callbackValue}/>
// export const Menu = ()=> <Accordion titleValue={'Menu'} collapsed={false} callback={callbackValue}/>
export const UnUser = ()=> <Accordion titleValue={'User'} collapsed={true} callback={callbackValue} item={valueUser} onClick={onClickCallback}/>
export const User = ()=> <Accordion titleValue={'User'} collapsed={false} callback={callbackValue}item={valueUser} onClick={onClickCallback}/>

export const EditMenu = ()=>{
    const [value, setValue]=useState<boolean>(true);

   return <Accordion titleValue={'User'}
                     collapsed={value}
                     callback={setValue}
   item={valueUser}
   onClick={(value)=>alert(`you chose ${value}`)}/>;
}