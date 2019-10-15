import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_COURSE_LIST
} from './actions'

const initialCart = {
    cart: [],
    form: {
        fullName: '',
        email: ''
    }
}

const initialCourses = {
    courses: []
}

const cartReducer = (state = initialCart, action) => {
    
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

const coursesReducer = (state = initialCourses, action) => {

    if (action.type === GET_COURSE_LIST) {
        return {
            ...state,
            courses: action.courses
        }
    }
    return state
}

export default createStore(
    combineReducers({cartReducer, coursesReducer}),
    composeWithDevTools(applyMiddleware(thunk))
)
