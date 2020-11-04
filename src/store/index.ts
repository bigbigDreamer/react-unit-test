import { createStore, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';

export const asyncAdd = () => {
    return (dispatch: (args: {type: any; payload?: any}) => void) => {
        setTimeout(() => {
            dispatch({ type: 'AsyncAdd', payload: 9})
        }, 1000);
    }
}

export const syncAdd = (payload: any) => {
    return {
        type: 'ADD',
        payload
    }
}

function reducers (state = { num: 1 }, action: any): any {
    switch (action.type) {
        case 'ADD':
            return { ...state, num: action.payload } ;
        case 'AsyncAdd':
            return { ...state, num: action.payload } ;
        default:
            return state;

    }
}

let store = createStore(reducers, applyMiddleware(thunk))


export default store;