import React, {useState} from 'react';


import {action} from "@storybook/addon-actions";
import Clock from "./Clock";
import {AnalogClock} from "./AnalogClock";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Clock',
    component: Clock

}

const callbackValue=action('Mode clicked')




export const ClockStories = ()=> {
const [mode, setMode] = useState(false)
const onClickAnalog = ()=>{
    return setMode(!mode)
}
    return (
        <>
            {/*{mode ? <AnalogClock/> : <Clock/>}*/}
            <div>
                <button onClick={onClickAnalog}>{mode ?'digital'  : 'analog'}</button>
            </div>

        </>
)
}

export const digitalClock = ()=>{

    return <Clock mode={'digital'}/>
}
export const analogClock = ()=>{

    return <Clock mode={'analog'}/>
}
