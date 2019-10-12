import { createStore } from 'redux'

const initialState = {
    cart: [],
    form: {
        fullName: '',
        email: ''
    }
}

const rootReducer = (state = initialState, action) => {
    console.log(action)
    return state
}

export default createStore(rootReducer)