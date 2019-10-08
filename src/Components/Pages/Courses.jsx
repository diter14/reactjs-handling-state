import React, { Component } from 'react'
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'

class Courses extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/diter14/fake-resources/cursos')
            .then( response => {
                console.log(response)
                this.setState({
                    courses: response.data
                })
            })
    }

    render() {
        const { courses } = this.state
        return (
            <CourseGrid
                courses={courses}
                >
            </CourseGrid>
        )
    }
}

export default Courses