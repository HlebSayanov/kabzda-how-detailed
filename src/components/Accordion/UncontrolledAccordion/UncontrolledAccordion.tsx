import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
    defaultValue?: boolean
}
const styleAccordion={
    cursor:'pointer',
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    console.log('Accordion rendered')

    const [collapsed, setCollapsed] = useState(props.defaultValue ? props.defaultValue : false)



    // const click = () => !collapsed ? setCollapsed(true) : setCollapsed(false)

    return <div>
        <AccordionTitle   title={props.titleValue} callback={()=>setCollapsed(!collapsed)}/>


        {!collapsed && <AccordionBody />}


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