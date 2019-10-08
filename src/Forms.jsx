import React, { Component } from 'react'
import Form from './Form'

class Forms extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayForm: true
        }

        this.toggleForm = this.toggleForm.bind(this)

    }

    toggleForm(e) {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    render() {
        let displayForm = this.state.displayForm
        return (
            <div className="forms">
                { 
                    displayForm ? <Form></Form> : null
                }
                <button
                    className="button small"
                    onClick={this.toggleForm}
                    >
                    Toggle Form
                </button>
            </div>
        )
    }
}

export default Forms