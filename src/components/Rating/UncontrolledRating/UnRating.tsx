import React, {useState} from "react";
import {log} from "util";



type RatingPropsType = {
    // value: number
     value?: 0 | 1 | 2 | 3 | 4 | 5
    callback?: ()=>void
}


const styleStars = {
    cursor:'pointer'
}

export function UnRating(props: RatingPropsType) {
    console.log('Rating rendering')
const [value, setValue]=useState<RatingPropsType | number>(props.value ? props.value : 0)




    return <div>
        < Star selected={value > 0} callback={()=>setValue(1 )}/>
        < Star selected={value > 1} callback={()=>setValue(2)}/>
        < Star selected={value > 2} callback={()=>setValue(3)}/>
        < Star selected={value > 3} callback={()=>setValue(4)}/>
        < Star selected={value > 4} callback={()=>setValue(5)}/>


    </div>

}
// Type of Props of Star
type StarPropsType  = {
    selected : boolean
    callback:()=>void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

        return <span style={styleStars} onClick={props.callback}>
            {props.selected ? <b>star </b> : "star " }

    </span>



}