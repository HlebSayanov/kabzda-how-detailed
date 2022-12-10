import React, {useState} from 'react';


import {action} from "@storybook/addon-actions";

import {UncontrolledOnOff} from "./UncontrolledOnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff

}

const callbackValue=action('Mode clicked')

export const ModeUnON = ()=> <UncontrolledOnOff defaultOn={true} setOn={callbackValue}/>
export const ModeUnOff = ()=> <UncontrolledOnOff defaultOn={false} setOn={callbackValue}/>

export const EditMode = ()=>{
    const [value, setValue]=useState<boolean>(true);
   return <UncontrolledOnOff defaultOn={value} setOn={setValue}/>
}