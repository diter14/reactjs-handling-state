import React, { useReducer } from 'react'
import CartContext from './CartContext'
import { 
    ADD_TO_CART,
    REMOVE_TO_CART
} from './actions'

const cartInitialState = {
    cart: []
}

const cartReducer = (state, { type, id }) => {

    if (type === ADD_TO_CART) {
        return {
            cart: state.cart.concat(id)
        }
    }
    if (type === REMOVE_TO_CART) {
        console.log(id)
        return {
            cart: state.cart.filter((cartCourseId) => cartCourseId !== id)
        }
    }


    return state
}

const CartProvider = ({ children }) => {

    const [cart, dispatch] = useReducer(cartReducer, cartInitialState)

    return (
        <CartContext.Provider value={[cart, dispatch]}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider