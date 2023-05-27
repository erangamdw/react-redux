// this is the initial values
const user = {
    name: 'Eranga',
    age: 27
}


//this use as the constantto avoid spelling mistakes
const numberActionTypes = {
    INC: 'increment',
    DEC: 'decrement'
}


//this function is create to call when need to increace the number *(with use of dispatch method)
export const numberIncrement=(payload:any)=>({
    type: numberActionTypes.INC,
    payload
})

//this function is create to call when need to decrease the number *(with use of dispatch method)
export const numberdecrement=(payload:any = 1)=>({ //default value is 1 it can be assign here
    type: numberActionTypes.DEC,
    payload
})

//this is the reducer that works conditionally based on the action type
const reducer=(state = user, action:any)=>{
    if(action.type=== numberActionTypes.INC){
        return {
            ...state, //spread the other data to the state, otherwise other data will be replaced with the new object
            age: state.age + action.payload,
        }
    }

    if(action.type === numberActionTypes.DEC){
        return {
            ...state,
            age: state.age - action.payload,
        }
    }

    return state;
}

export default reducer