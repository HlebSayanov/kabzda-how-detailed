import React, {useMemo, useState} from 'react';


import {action} from "@storybook/addon-actions";
import {isArray} from "util";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'useState',
    // component: UncontrolledOnOff

}

function addCount (){
    console.log('addCount')
    return 213124124
}


export const ExampleUseState = () => {
 const x = useMemo<number>(addCount,[])
    const [count, setCount] = useState<number>(0)   // значения будут менятся но каждый раз будет ывфзватться новая функцуия
 // const [count, setCount] = useState(addCount())

    const fn = (n:number)=>{
     return n+1
    }

debugger

    return (
        <>
            <button onClick={()=>{setCount(fn)}}>add</button>
            {count}
        </>
    )

}

