const user = {
    name: 'Eranga',
    age: 27
}

const reducer=(state = user, action:any)=>{
    if(action.type==="increment"){
        return {
            ...state,
            age: state.age + action.payload,
        }
    }

    if(action.type === "decrement"){
        return {
            ...state,
            age: state.age - action.payload,
        }
    }
    
    return state;
}

export default reducer