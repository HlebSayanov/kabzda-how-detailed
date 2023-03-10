import React, {useMemo, useState} from 'react';


import {action} from "@storybook/addon-actions";
import {isArray} from "util";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UseMemo',
    // component: UncontrolledOnOff

}


export const ExampleUseMemo = () => {

    let [numA, setNumA] = useState<number>(3)
    let [numB, setNumB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    useMemo(()=>{
        for (let i = 1; i <= numA; i++) {
            let x= 0
            while (x<190000000){
                x++
            }
            resultA = resultA * i
        }
    },[numA])

    for (let i = 1; i <= numB; i++) {
        resultB = resultB * i
    }

    return (
        <>
            A: <input value={numA} onChange={(e) => setNumA(+e.currentTarget.value)}/>
            B: <input value={numB} onChange={(e) => setNumB(+e.currentTarget.value)}/>
            <div>
                result A = {resultA}
            </div>
            <div> result B = {resultB}</div>
        </>
    )

}

const callbackValue = action('Mode clicked')



const UsersSecrets = (props:{user:string[] }) => {
    console.log('usersSecter')
    return(
        <>
            {props.user.map((el,i )=> <div key={i}>{el}</div>)}
        </>
    )
}

const Users = React.memo(UsersSecrets)


export const Example2UseMemo = ()=>{
    console.log('Example2UseMemo')
    const [counter, setCounter]= useState<number>(0)
    let [users, setUsers] = useState(['Marishka', 'Baron', 'Leni','Virgin'])
    const onClickHandler = () => {
        setCounter(counter+1)
    }

    const onClickAddUser = () => {
        setUsers([...users, 'Sap ' + new Date().getMilliseconds()])
    }
    const onClickdeleteUser = () => {
        setUsers(users.filter(el=>el !== users[users.length-1] ))
        console.log(users)
    }



       const arr  = useMemo(()=>{
           return  users.filter(el=> el.toLowerCase().indexOf('a') > -1)
      },[users])

    return (
        <>
            <button onClick={onClickHandler}>+</button>
            <button onClick={onClickAddUser}>add</button>

            <div>
                {counter}
                <Users user={arr}/>
            </div>

        </>
    )
}

