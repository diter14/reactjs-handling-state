import { createStore } from 'redux'
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions'
import { composeWithDevTools } from ''

const initialState = {
    cart: [],
    form: {
        fullName: '',
        email: ''
    }
}

const rootReducer = (state = initialState, action) => {
    
    if (action.type === ADD_TO_CART) {
        return {
            ...state,
            cart: state.cart.concat(action.id)
        }
    }
    
    if (action.type === REMOVE_FROM_CART) {
        return {
            ...state,
            cart: state.cart.filter(cartElId => cartElId !== action.id)
        }
    }

    return state
}

export default createStore(rootReducer, composeWithDevTools())