import React from 'react'

const History = ({ match, location, history }) => {
    return (
        <div className="ed-grid md-grid-4">
            <h2 className="t2">Match</h2>
            <pre>{ JSON.stringify(match) }</pre>
            <h2 className="t2">Location</h2>
            <pre>{ JSON.stringify(location) }</pre>
            <h2 className="t2">History</h2>
            <pre>{ JSON.stringify(history) }</pre>
        </div>
    )
}

export default History