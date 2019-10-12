import React, { Component } from 'react'
import { updateContactField } from '../../store/actionCreators'
import { connect } from 'react-redux'

class Form extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        // console.log('Ciclo_Montaje___constructor')

        this.state = {
            name: '',
            email: '',
            date: new Date(),
        }
        this.updateField = this.updateField.bind(this)
        this.updateDate = this.updateDate.bind(this)
    }

    updateField(name, value) {
        this.setState({[name]: value})
        this.props.updateField(name, value)
    }

    updateDate() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        // console.log('Ciclo_Montaje___componentDidMount')
        // this.stateDateInterval = setInterval(() => {
        //     this.updateDate()
        // }, 1000)
    }

    render() {
        // console.log('Ciclo_Montaje___render')
        return (
            <div className="ed-grid">
                <div className="m-grid-12">
                    <h1 className="t1">{ this.props.title ? this.props.title : 'Formulario' }</h1>
                    <p>
                        Hi! <b>{this.state.full_name}</b>, your email is: <b>{this.state.email}</b>
                    </p>
                    {/* <strong>Date: {this.state.date.toGMTString()}</strong> */}
                    <h3>Form</h3>
                    <form action="/">
                        <div className="ed-grid m-grid-2">
                            <div className="form__item">
                                <label htmlFor="">Full Name</label>
                                <input
                                    type="text"
                                    className=""
                                    onChange={ e => this.updateField('full_name', e.target.value) }
                                    />
                            </div>
                            <div className="form__item">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    className=""
                                    onChange={ e => this.updateField('email', e.target.value) }
                                    />
                            </div>
                        </div>
                        <div className="form__item">
                            <input type="submit" className="button full small" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('Ciclo_Actualizacion___componentDidUpdate')
        // console.log('Ciclo_Actualizacion___componentDidUpdate prevProps: ', prevProps)
        // console.log('Ciclo_Actualizacion___componentDidUpdate prevState: ', prevState)
    }

    componentWillUnmount() {
        // console.log('Ciclo_Montaje___componentWillUnmount')
        // clearInterval(this.stateDateInterval)
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    updateField(fieldName, fieldValue) {
        dispatch(updateContactField({fieldName, fieldValue}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)