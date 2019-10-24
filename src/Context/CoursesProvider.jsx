import React, { Component } from 'react'
import CoursesContext from './CoursesContext'
import axios from 'axios'

class CoursesProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/diter14/fake-resources/cursos')
        .then( response => {
            this.setState({
                courses: response.data
            })
        })
    }
    
    render() {
        return (
            <CoursesContext.Provider value={this.state}>
                { this.props.children }
            </CoursesContext.Provider>
        )
    }
}




export default CoursesProvider