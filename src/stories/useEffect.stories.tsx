import React, {ReactNode, useEffect, useMemo, useState} from 'react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'useEffect',
}


export const ExampleUseSelector = () => {
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(document.title)
    const [title, setTile] = useState('')

    useEffect(() => {
        console.log('no array of dependencies')
        document.title = title
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
            <input onChange={(e) => setFake(e.currentTarget.value)}/>
            <button onClick={() => setTile(fake)}>+</button>
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


export const ExampleSetTimeOut = () => {
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)
    // const [title, setTile] = useState('')

    // useEffect(()=>{
    //     console.log('no array of dependencies')
    //    setTimeout(()=>{
    //        console.log('tick')
    //        setCount((n)=>n+1)
    //    },1000)
    //
    // },[])
    useEffect(() => {
        console.log('no array of dependencies')
        const x = setInterval(() => {
            console.log('tick')
            setCount(n => n + 1)
        }, 1000)
        setTimeout(() => {
            clearInterval(x)
        }, 5000)
    }, [])


    return (
        <>

            <button onClick={() => {
                setCount(count + 1)
            }}>add Count
            </button>
            {count}
            <div>
                <button onClick={() => {
                    setFake(fake + 1)
                }}>add fake
                </button>
                {fake}
            </div>

        </>
    )

}
export const ExampleHomeWork = () => {
    const [id, setId] = useState<number>()
    const [data, setData] = useState(new Date())
    const time = data.toLocaleDateString()


    useEffect(() => {
        setId(window.setInterval(() => {
            setData(new Date())
        }, 1000))


    }, [])


    const onClick = (id: number | undefined) => {
        console.log(id)
        return clearInterval(id)
    }
    const onClick2 = (e: any) => {
        return e.preventDefault()
        // setId(window.setInterval(()=>{
        //     setData(new Date())
        // },1000))
    }

    return (
        <>
            <h1>{time} {data.toLocaleTimeString()} </h1>
            <button onClick={() => onClick(id)}>STOP TIME</button>
            <button onClick={onClick2}>RUN TIME</button>

        </>
    )

}

export const KeyExampleUseEffect = () => {

    const [count, setCounter] = useState(1)
    const [text, setText] = useState('')
    console.log('KeyExampleUseEffect')

    useEffect(() => {
        function handler(e: KeyboardEvent) {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <>
            count:{count}

            <div>
                <button onClick={() => setCounter(count + 1)}>add</button>
            </div>
            <div>
                text: {text}
            </div>


        </>
    )

}


