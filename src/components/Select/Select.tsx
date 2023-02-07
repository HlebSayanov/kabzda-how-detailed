import React, {useState} from 'react';
import s from './select.module.css'

// type valueVapeType = 'Alpaca' | 'Husky' | 'Paradice' | 'Smoke Kitchen'
type ItemType = {
    name: string
    id: number
}

type SelectType = {
    value: string
    onChange: (value: string) => void
    items: ItemType[]
}
export const Select = (props: SelectType) => {

    const [openDiv, setOpenDiv] = useState(true)

    const onClickOpenDiv = () => {
        setOpenDiv(false)
        console.log('openClick')
    }
    const onClickClosedDiv = (value: any) => {
        setOpenDiv(true)
        props.onChange(value)
        console.log(value)
    }
    const onBlurClosedDiv = () => {
        setOpenDiv(true)
        console.log('blur')
    }


    return (
        <div className={s.wrapper}>
            {openDiv
                ? <div
                    className={s.wrapper}
                    onClick={onClickOpenDiv}>{props.value}</div>
                : props.items.map(el =>
                    <div
                        className={s.openMode}
                    key={el.id}
                    onClick={() => onClickClosedDiv(el.id)}
                    onBlur={onBlurClosedDiv}
                >{el.name}
                </div>)
            }

        </div>
    );
};

