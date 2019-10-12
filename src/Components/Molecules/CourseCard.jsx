import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../../store/actionCreators'

const CourseCard = ({ id, title, poster, teacher, price, addCourseToCart }) => {
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
                        {/* <div className="card__avatar s-mr-1">
                            <div className="circle img-container">
                                <img src="https://api.ed.team/files/avatars/66813820-2857-4af9-b84f-9196acbb832e.jpg" alt="Avatar"/>
                            </div>
                        </div> */}
                        <span className="small">{teacher}</span>
                    </div>
                </div>
                <div className="s-main-center">
                    <button 
                        className="button--ghost-alert button--tiny"
                        href="/"
                        onClick={() => addCourseToCart(id) }
                        >
                        $ {price}
                    </button>
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

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    addCourseToCart(id){
        dispatch(addToCart(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)