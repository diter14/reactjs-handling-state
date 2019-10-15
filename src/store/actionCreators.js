import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_COURSE_LIST,
    GET_USER_LIST,
    REMOVE_USER,
    UPDATE_CONTACT_FORM_FIELD,
} from './actions'

import axios from 'axios'

const addToCart = id => ({
    type: ADD_TO_CART,
    id
})

const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    id
})

const getCourses = () => (dispatch) => {
    axios.get('https://my-json-server.typicode.com/diter14/fake-resources/cursos')
        .then(response => {
            return dispatch({
                type: GET_COURSE_LIST,
                courses: response.data
            })
        })
}

const getUsers = () => (dispatch) => {
    axios.get('https://randomuser.me/api/?results=50')
        .then(response => {
            return dispatch({
                type: GET_USER_LIST,
                users: response.data.results
            })
        })
}

const removeUser = (id) => ({
    type: REMOVE_USER,
    id
})

const updateContactField = ({fieldName, fieldValue}) => ({
    type: UPDATE_CONTACT_FORM_FIELD,
    data: {
        fieldName,
        fieldValue
    }
})

export {
    addToCart,
    removeFromCart,
    getCourses,
    getUsers,
    removeUser,
    updateContactField
}