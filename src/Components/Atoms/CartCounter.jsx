import React from 'react'
import { connect } from 'react-redux'

const CartCounter = ({cartLength}) => {
    return (
        <li>
            <button className="button tiny ghost">
                Carro: {cartLength}
            </button>
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        cartLength: state.cartReducer.cart.length
    }
}

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)