import React, {ChangeEvent, useRef, useState} from 'react';


import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Input',
    // component: UncontrolledOnOff

}

const callbackValue = action('Mode clicked')

export const UncontrolledInput = () => {
    const [value, setValue] = useState('')
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <><input onChange={OnChangeHandler}/> value for input: {value} </>

}
export const UncontrolledInputRef = () => {
    const [value, setValue] = useState('')
    const fgref = useRef<HTMLInputElement>(null)

    const save = () => {
        const elRef = fgref.current as HTMLInputElement

        setValue(elRef.value)
    }

    return <><input ref={fgref}/>
        <button onClick={save}>save</button>
        : {value} </>

}

export const UncontrolledInputBtnAdd = () => {

    const [value, setValue] = useState('')
    const [title, setTitle] = useState('')
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const add = () => {
        debugger

        setTitle(value)
        setValue('')
    }
    return (
        <>
            <input onChange={OnChangeHandler} value={value}/>
            <button onClick={add}>add</button>
            <h3>{title}</h3>
        </>
    )
}

export const UncontrolledInputSaveTest = () => {

    const [example, setExample] = useState('')
    const refTest = useRef<HTMLInputElement>(null)

    const onClickSave = () => {

        const elementRefTest = refTest.current as HTMLInputElement
        setExample(elementRefTest.value)
    }

    return (
        <div>
            <input ref={refTest}/>
            <button onClick={onClickSave}>save</button>
            value: {example}
        </div>
    )

}

export const ControlledInput = () => {
    const [value, setValue] = useState('')

    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <input onChange={OnChangeHandler} value={value}/>
}

export const ControlledCheckbox = () => {

    const [value, setValue] = useState(true)

    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={value} onChange={OnChangeHandler}/>
}

export const ControlledSelected = () => {

    const [value, setValue] = useState('3')

    const OnChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <select onChange={OnChangeHandler} value={value} >
                <option value="1">Husky</option>
                <option value="2">Paradice</option>
                <option value="3">Alpaca</option>
            </select>
        </>
    )

}
