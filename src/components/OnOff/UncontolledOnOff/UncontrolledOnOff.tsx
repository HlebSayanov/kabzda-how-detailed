import React, {useState} from 'react';

type SwitchType = {
    setOn: (on: boolean) => void
    defaultOn?:boolean
}

export  const UncontrolledOnOff = (props: SwitchType) => {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const styleOn = {
        display: 'inline-block',
        width: '50px',
        height: '30px',
        border: 'solid 2px black',
        paddingLeft: '2px',
        backgroundColor: on ? 'green' : 'silver'

    }

    const styleOff = {
        display: 'inline-block',
        width: '50px',
        height: '30px',
        marginLeft: '10px',
        border: 'solid 2px black',
        backgroundColor: on ? 'silver' : 'red'
    }
    const styleIndicator = {
        width: '20px',
        height: '20px',
        marginLeft: '5px',
        marginTop: '5px',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red',
        border: 'solid 2px black',
        display: 'inline-block',
    }
    const onClickOn = () => {
        setOn(true)
        props.setOn(true)
    }
    const onClickOff = () => {
        setOn(false)
        props.setOn(false)
    }


    return (
        <div style={{display: 'flex'}}>
            <div style={styleOn} onClick={onClickOn}>On</div>
            <div style={styleOff} onClick={onClickOff}>Off</div>
            <div style={styleIndicator}></div>
        </div>
    );
};

