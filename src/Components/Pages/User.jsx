import React from 'react'
import UsersGrid from '../Organisms/UsersGrid'
import { connect } from 'react-redux'

const User = ({users}) => (<UsersGrid users={users} />)

const mapStateToProps = (state) => ({
    users: state.usersReducer.users
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(User)