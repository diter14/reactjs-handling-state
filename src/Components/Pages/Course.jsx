import React from 'react'
import useCourse from '../Hooks/useCourse'

// Implementing HOOKS
const Course = ({ match }) => {

    const course = useCourse(match.params.id)

    return (
        <div className="ed-grid m-grid-3">
        {
            course
                ? (
                    <>
                        <h1 className="t1">{course.name}</h1>
                        <p className="m-cols-2">{course.information}</p>
                        <img 
                            src={course.picture} 
                            alt="Course Poster" 
                            className="m-cols-1"
                            />
                    </>
                )
                : (
                    <h1 className="t1">Course not found</h1>
                )
        }
        </div>
    )
}

export default Course