import React from 'react'
import CourseCard from '../Molecules/CourseCard'

const CourseGrid = ({ courses }) => {

     return (
        <div className="ed-grid">
            <h1 className="t3">Courses</h1>
            <div className="ed-grid m-grid-3">
            {
                courses.map((course) => {
                    return <CourseCard 
                                key={course.id}
                                id={course.id}
                                title={course.name}
                                poster={course.picture}
                                price={Math.ceil(Math.random()*100)}
                                teacher={course.subtitle}
                                />
                })
            }
            </div>
        </div>
    )
}

export default CourseGrid