const initialState = {
    like: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "INCREMENT": return{
            like: state.like + 1
        }
        case "DECREMENT": return {
            like: state.like - 1
        }
        default: return state
    }
}

export default reducer