



export type StateType={
    collapsed:boolean
}

type ActionType={
    type:string
}
export const reducerUncontrolledAcc = (state:StateType, action:ActionType):StateType => {
        switch (action.type){
            case 'CHANGE-COLLAPSED':

                return {...state, collapsed:!state.collapsed}
            default:
                return state
        }
}
