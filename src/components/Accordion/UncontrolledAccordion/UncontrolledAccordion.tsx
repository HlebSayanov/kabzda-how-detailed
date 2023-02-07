import React, {useReducer, useState} from "react";
import {reducerUncontrolledAcc} from "./reducer-uncontrolledAcc";


type AccordionPropsType = {
    titleValue: string
    defaultValue?: boolean
}
const styleAccordion={
    cursor:'pointer',
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    console.log('Accordion rendered')

    // const [collapsed, setCollapsed] = useState(props.defaultValue ? props.defaultValue : false)
    // const [collapsed, setCollapsed] = useState(false)
     debugger
    const [state, setDispatch] = useReducer(reducerUncontrolledAcc, {collapsed:true})



    // const click = () => !collapsed ? setCollapsed(true) : setCollapsed(false)

    return <div>
        {/*<AccordionTitle   title={props.titleValue} callback={()=>setCollapsed(!collapsed)}/>*/}
        {/*<AccordionTitle   title={props.titleValue} callback={()=>setCollapsed(!collapsed)}/>*/}
        <AccordionTitle   title={props.titleValue} callback={()=>setDispatch({type:'CHANGE-COLLAPSED'})}/>


        {!state.collapsed && <AccordionBody />}


    </div>


}

type AccordionTitlePropsType = {
    title: string
    callback:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    console.log('AccordionTitle rendering')

    return (
        <div>
            <h3 style={styleAccordion}  onClick={props.callback}>---{props.title}---</h3>

        </div>
    )

}

function AccordionBody() {
    console.log('AccordionBody rendering')


    return <div className={'transition'}>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
