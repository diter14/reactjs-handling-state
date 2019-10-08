import React from 'react'
import withLogin from '../HOC/withLogin'

const Public = ({logged}) => {
    return (
        <div className="ed-grid">
            <h1 className="t1">Public Page</h1>
            <p>Is loggued? : {logged.toString()}</p>
        </div>
    )
}

export default withLogin(Public)