import { 
    ADD_TO_CART,
    UPDATE_CONTACT_FORM_FIELD,
} from './actions'

const addToCart = id => ({
    type: ADD_TO_CART,
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
    updateContactField
}