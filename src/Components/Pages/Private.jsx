import React from 'react'
import withLogin from '../HOC/withLogin'

const Private = ({ logged }) => {
    // console.log(logged)
    return (
        <div className="ed-grid">
            <h1 className="t1">
                {
                    logged
                    ? 'Private Page'
                    : 'This is a private page, you need to be loggued'
                }
            </h1>
        </div>
    )
}

export default withLogin(Private)