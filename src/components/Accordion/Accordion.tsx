import React from "react";




type AccordionPropsType = {
    titleValue: string
    collapsed:boolean
    callback:(value:boolean)=>void
}


export function Accordion(props: AccordionPropsType) {

    console.log('Accordion rendered')


        return  <div>
            <AccordionTitle title={props.titleValue} callback={()=>props.callback(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}

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

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}