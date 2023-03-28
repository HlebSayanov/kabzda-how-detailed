import React, {Component, useEffect, useState} from "react";
import './AnalogClock.css'



export const AnalogClock = () => {
    const [data,setData]=useState(new Date())


    useEffect(()=>{
        const intervalId=   setInterval(()=>{
            console.log('tick')
            setData(new Date())
        },1000)
        return ()=>{
            clearInterval(intervalId)
        }

    })


    return (

            <div className="clock">
                <div
                    className="hour_hand"
                    style={{
                        transform: `rotateZ(${data.getHours() * 30}deg)`
                    }}
                />
                <div
                    className="min_hand"
                    style={{
                        transform: `rotateZ(${data.getMinutes() * 6}deg)`
                    }}
                />
                <div
                    className="sec_hand"
                    style={{
                        transform: `rotateZ(${data.getSeconds() * 6}deg)`
                    }}
                />
                <span className="twelve">12</span>
                <span className="one">1</span>
                <span className="two">2</span>
                <span className="three">3</span>
                <span className="four">4</span>
                <span className="five">5</span>
                <span className="six">6</span>
                <span className="seven">7</span>
                <span className="eight">8</span>
                <span className="nine">9</span>
                <span className="ten">10</span>
                <span className="eleven">11</span>
            </div>


    );
};


