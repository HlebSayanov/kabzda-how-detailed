import React, {useState} from 'react';


import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ModeOnOff',
    component: OnOff

}

const callbackValue=action('Mode clicked')

export const ModeON = ()=> <OnOff  onOff={true} setOnOff={callbackValue}/>
export const ModeOff = ()=> <OnOff  onOff={false} setOnOff={callbackValue}/>

export const EditMode = ()=>{
    const [value, setValue]=useState<boolean>(true);
   return <OnOff onOff={value} setOnOff={setValue}/>
}