import React, {FC, useEffect, useState} from 'react';
import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./digitalClock";


type ClockType = {
    mode: 'digital' | 'analog'
}

const Clock: FC<ClockType> = (props) => {

    const [data, setData] = useState(new Date())
    // const [mode, setMode] = useState(true)


    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setData(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }

    })
    let view
    switch (props.mode) {
        case 'analog': {
            view = <AnalogClock/>
            break
        }
        default:
           view = <DigitalClock data={data}/>


    }


    return (
        <>
            {view}
        </>
    )
};

export default Clock;
