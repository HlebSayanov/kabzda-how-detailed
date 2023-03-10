import React, {useState} from 'react';


import {action} from "@storybook/addon-actions";
import {isArray} from "util";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactMemo',
    // component: UncontrolledOnOff

}

const callbackValue = action('Mode clicked')

 const Counter = (props: {count:number}) => {
     console.log('conter')
    return (
         <>
             {props.count}
         </>
     )
 }
 
 const UsersSecrets = (props:{user:string[] }) => {
     console.log('usersSecter')
   return(
       <>
           {props.user.map((el,i )=> <div key={i}>{el}</div>)}
       </>
   )
 }
 
 const Users = React.memo(UsersSecrets)


export const Example = ()=>{
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


    return (
        <>
            <button onClick={onClickHandler}>+</button>
            <button onClick={onClickAddUser}>addUser</button>
            <button onClick={onClickdeleteUser}>deleteUser</button>
      <div>
          <Counter count={counter}/>
          <UsersSecrets user={users}/>
      </div>

        </>
    )
}
