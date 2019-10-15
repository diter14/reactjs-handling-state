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
    GET_COURSE_LIST,
    GET_USER_LIST,
    REMOVE_USER
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

const initialUsers = {
    users: []
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

const usersReducer = (state = initialUsers, action) => {
    if (action.type === GET_USER_LIST) {
        return {
            ...state,
            users: action.users
        }
    }
    if (action.type === REMOVE_USER) {
        return {
            ...state,
            users: state.users.filter((user) => user.id.value !== action.id)
        }
    }
    return state
}

export default createStore(
    combineReducers({cartReducer, coursesReducer, usersReducer}),
    composeWithDevTools(applyMiddleware(thunk))
)
