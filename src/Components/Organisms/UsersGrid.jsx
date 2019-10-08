import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'
import withLoader from '../HOC/withLoader'

class UsersGrid extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

    }

    componentDidMount() {
    }

    render() {
        const { users } = this.props
        return (
            <div className="ed-grid">
                <h1 className="t3">Users</h1>
                <div className="ed-grid m-grid-3">
                    {
                        users.map((user) => {
                            return <UserCard 
                                        key={user.email}
                                        id={user.id.value}
                                        large_avatar={user.picture.large}
                                        username={`${user.name.last} ${user.name.first}`}
                                        avatar={user.picture.thumbnail}
                                        email={user.email}
                                        />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withLoader('users', UsersGrid)