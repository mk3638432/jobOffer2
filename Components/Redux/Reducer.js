const initalValue = 0 
const Reducer = (state = initalValue , action) => {
     switch(action.type) {
        case "INCREMENT" : return state + 1
        case "DECREMENT" : return state - 1
        default : return state
     }
}

export default Reducer