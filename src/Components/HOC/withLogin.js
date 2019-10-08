import React, { Component } from 'react'

const withLogin = (WrappedComponent) => {
    return class WithLogin extends Component {

        constructor(props) {
            super(props)

            this.state = {
                logged: false
            }

            this.verifyUserLogin = this.verifyUserLogin.bind(this)
        }

        verifyUserLogin() {
            setTimeout(() => {
                const loggued = Math.round(Math.random())
                this.setState({
                    logged: loggued === 1
                })
            })
        }

        componentDidMount() {
            this.verifyUserLogin()
        }

        render() {
            console.log(this.state)
            return <WrappedComponent 
                        {...this.props} 
                        logged={this.state.logged}
                        />
        }
    }
}

export default withLogin