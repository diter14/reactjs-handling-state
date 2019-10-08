import React, { Component } from 'react'

const withLoader = (propKey, WrappedComponent) => {
    return class WithLoader extends Component {

        constructor(props) {
            super(props)
        }

        render() {
            console.log(this.props[propKey])
            return this.props[propKey].length === 0
                    ? <div className="ed-grid m-grid-3"><h3 className="t3">Loading...</h3></div>
                    : <WrappedComponent {...this.props} />
        }
        

    }
}

export default withLoader