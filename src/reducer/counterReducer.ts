
const INITIAL_STATE= {
    count : 0
}

type ReduxAction = {type:string}


const counterReducer = (state = INITIAL_STATE, action:ReduxAction) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                count: state.count + 1,
            } 
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
        default: 
            return state;
    }
}

export default counterReducer