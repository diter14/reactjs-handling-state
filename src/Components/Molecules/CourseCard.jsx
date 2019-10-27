import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import CartContext from './../../Context/Cart/CartContext';
import { ADD_TO_CART, REMOVE_TO_CART } from './../../Context/Cart/actions';

const CourseCard = ({ id, title, poster, teacher, price }) => {

    const [state, dispatch] = useContext(CartContext)

    return (
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <Link to={`/cursos/${id}`}>
                    <img src={poster} alt={title}/>
                </Link>
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t4 s-mb-2 s-center">
                    {title}
                </h3>
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                        <span className="small">{teacher}</span>
                    </div>
                </div>
                <div className="s-main-center">
                    {
                        (state.cart.find(cartId => cartId === id))
                        ? (
                            <button 
                                className="button--ghost-alert button--tiny"
                                onClick={() => dispatch({
                                    type: REMOVE_TO_CART,
                                    id
                                })}
                                >
                                Remover del carro
                            </button>
                        )
                        : (
                            <button 
                                className="button--ghost-alert button--tiny"
                                onClick={() => dispatch({
                                    type: ADD_TO_CART,
                                    id
                                })}
                                >
                                $ {price}
                            </button>
                        )
                    }
                </div>
            </div>
        </article>
    )
}

CourseCard.propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string,
    teacher: PropTypes.string,
    price: PropTypes.number,
}

CourseCard.defaultProps = {
    title: 'Default Course',
    poster: 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png',
    teacher: '',
    price: 0
}

export default CourseCard