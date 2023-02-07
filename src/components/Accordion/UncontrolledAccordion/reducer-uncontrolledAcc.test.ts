import {reducerUncontrolledAcc, StateType} from "./reducer-uncontrolledAcc";

test('should be collapsed true ',()=>{

    const startState:StateType = {
        collapsed:false
    }
    const endState = reducerUncontrolledAcc(startState,{type:'CHANGE-COLLAPSED'})

    expect(endState.collapsed).toBe(true)
})
test('should be collapsed false ',()=>{

    const startState:StateType = {
        collapsed:true
    }
    const endState = reducerUncontrolledAcc(startState,{type:'CHANGE-COLLAPSED'})

    expect(endState.collapsed).toBe(false)
})
test('should be collapsed erroe ',()=>{

    const startState:StateType = {
        collapsed:true
    }


    expect(()=>reducerUncontrolledAcc(startState,{type:'Fake'})).toThrowError()
})
