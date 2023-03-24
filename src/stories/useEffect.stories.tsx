import React, {useEffect, useMemo, useState} from 'react';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'useEffect',
}




export const ExampleUseSelector = () => {
 const [count, setCount] = useState(0)
 const [fake, setFake] = useState(document.title)
 const [title, setTile] = useState('')

    useEffect(()=>{
        console.log('no array of dependencies')
        document.title=title
    })
    // useEffect(()=>{
    //     console.log('no array of dependencies')
    //     document.title=count.toString()
    // })
    // useEffect(()=>{
    //     console.log(' empty array of dependencies')
    //     document.title=count.toString()
    // },[])
    // useEffect(()=>{
    //     console.log(' Count array of dependencies')
    //     document.title=count.toString()
    // },[count])

    return (
        <>
            <input onChange={(e)=>setFake(e.currentTarget.value)}/>
            <button onClick={()=>setTile(fake)}>+</button>
            {title}
            {/*<button onClick={()=>{setCount(count+1)}}>add Count</button>*/}
            {/*{count}*/}
            {/*<div>*/}
            {/*    <button onClick={()=>{setFake(fake+1)}}>add fake</button>*/}
            {/*    {fake}*/}
            {/*</div>*/}

        </>
    )

}

