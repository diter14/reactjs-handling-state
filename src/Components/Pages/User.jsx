import React, { Component } from 'react'
import UsersGrid from '../Organisms/UsersGrid'
import axios from 'axios'

class User extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
        }

    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=50')
            .then( response => {
                this.setState({
                    users: response.data.results
                })
            })
    }

    render() {
        const { users } = this.state
        return (
            <UsersGrid users={users} />
        )
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

export default User