import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

const UserCard = ({ id, large_avatar, username, avatar, email }) => {
    return (
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                {/* <Link to={`/cursos/${id}`}> */}
                    <img src={large_avatar} alt={username}/>
                {/* </Link> */}
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t4 s-mb-2 s-center">
                    {username}
                </h3>
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                        <div className="card__avatar s-mr-1">
                            <div className="circle img-container">
                                <img 
                                    src={avatar}
                                    alt="Avatar"
                                    />
                            </div>
                        </div>
                        {/* <span className="small">{username}</span> */}
                    </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-dark button--tiny" href="/">{email}</a>
                </div>
            </div>
        </article>
    )
}

UserCard.propTypes = {
    large_avatar: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
    email: PropTypes.string,
}

UserCard.defaultProps = {
    large_avatar: 'Default User',
    username: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png',
    avatar: '',
    email: ''
}

export default UserCard