import React from "react";



type ItemType = {
    name:string
    value:any
}


type AccordionPropsType = {
    titleValue: string
    collapsed:boolean
    callback:(value:boolean)=>void
    item:ItemType[]
    onClick:(value:string)=>void
}


export function Accordion(props: AccordionPropsType) {

    console.log('Accordion rendered')


        return  <div>
            <AccordionTitle title={props.titleValue} callback={()=>props.callback(!props.collapsed) }/>
            {!props.collapsed && <AccordionBody item={ props.item} onClick={props.onClick}/>}

        </div>


}

type AccordionTitlePropsType = {
    title: string
    callback:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    console.log('AccordionTitle rendering')

    return <h3 style={{cursor: 'pointer'}} onClick={props.callback}>---{props.title}---</h3>

}

type AccordionBodyPropsType = {

    item:ItemType[]
    onClick:(value:string)=>void
}


function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <div>
        <ul>
            {props.item.map(el => <li onClick={()=>props.onClick(el.value)} key={el.value}>{el.name}</li>)}
        </ul>
    </div>
}