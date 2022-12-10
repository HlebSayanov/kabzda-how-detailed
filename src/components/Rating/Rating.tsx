import React from "react";

export type RatingStarType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    // value: number
    value: RatingStarType
    callback: (value: RatingStarType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return <div>
        < Star selected={props.value > 0} callbackSelected={() => props.callback(1)}/>
        < Star selected={props.value > 1} callbackSelected={() => props.callback(2)}/>
        < Star selected={props.value > 2} callbackSelected={() => props.callback(3)}/>
        < Star selected={props.value > 3} callbackSelected={() => props.callback(4)}/>
        < Star selected={props.value > 4} callbackSelected={() => props.callback(5)}/>

    </div>

}

// Type of Props of Star
type StarPropsType = {
    selected: boolean
    callbackSelected: () => void
}


function Star(props: StarPropsType) {
    return <span onClick={props.callbackSelected}>
      {props.selected ? <b>star </b> : 'star '}
  </span>


}