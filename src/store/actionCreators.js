import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_COURSE_LIST,
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

const getCourses = () => dispatch => {
    axios.get('https://my-json-server.typicode.com/diter14/fake-resources/cursos')
        .then(response => {
            return dispatch({
                type: GET_COURSE_LIST,
                courses: response.data
            })
        })
}

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
    updateContactField
}