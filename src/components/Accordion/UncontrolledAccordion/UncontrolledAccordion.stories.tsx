import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";

import {UncontrolledAccordion} from "./UncontrolledAccordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,

}

const callbackValue=action('click title Accordion')

export const UnMenu = ()=> <UncontrolledAccordion titleValue={'Menu'} defaultValue={true}/>

export const EditMenuUncontrolled = ()=>{


   return <UncontrolledAccordion titleValue={'Menu'} defaultValue={false} />;
}