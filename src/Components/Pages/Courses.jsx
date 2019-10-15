import React from 'react'
import CourseGrid from '../Organisms/CourseGrid'
import { connect } from 'react-redux';

const Courses = ({courses}) => ( <CourseGrid courses={courses}></CourseGrid>)

const mapStateToProps = (state) => ({
    courses: state.coursesReducer.courses
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Courses)