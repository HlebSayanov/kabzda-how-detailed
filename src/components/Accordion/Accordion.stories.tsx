import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Accordion',
    component: Accordion,

}

const callbackValue=action('click title Accordion')

export const UnMenu = ()=> <Accordion titleValue={'Menu'} collapsed={true} callback={callbackValue}/>
export const Menu = ()=> <Accordion titleValue={'Menu'} collapsed={false} callback={callbackValue}/>
export const UnUser = ()=> <Accordion titleValue={'User'} collapsed={true} callback={callbackValue}/>
export const User = ()=> <Accordion titleValue={'User'} collapsed={false} callback={callbackValue}/>

export const EditMenu = ()=>{
    const [value, setValue]=useState<boolean>(true);

   return <Accordion titleValue={'Menu'} collapsed={value} callback={setValue}/>;
}