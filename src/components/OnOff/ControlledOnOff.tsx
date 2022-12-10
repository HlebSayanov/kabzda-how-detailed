import React, {useState} from 'react';


type ControlledOnOffType={
    onOff:boolean
    setOnOff:(value:boolean)=>void
}
export const ControlledOnOff = (props:ControlledOnOffType) => {




    const styleOn = {
        display: 'inline-block',
        width: '50px',
        height: '30px',
        border: 'solid 2px black',
        paddingLeft: '2px',
        backgroundColor: props.onOff ? 'green' : 'silver'

    }

    const styleOff = {
        display: 'inline-block',
        width: '50px',
        height: '30px',
        marginLeft: '10px',
        border: 'solid 2px black',
        backgroundColor: props.onOff ? 'silver' : 'red'
    }
    const styleIndicator = {
        width: '20px',
        height:'20px',
        marginLeft: '5px',
        marginTop:'5px',
        borderRadius: '50%',
        backgroundColor: props.onOff ? 'green' : 'red',
        border: 'solid 2px black',
        display: 'inline-block',
    }



    return (
        <div style={{display:'flex'}}>
            <div style={styleOn} onClick={()=>props.setOnOff(true)}>On</div>
            <div style={styleOff} onClick={()=>props.setOnOff(false)}>Off</div>
            <div style={styleIndicator}></div>
        </div>
    );
};

