import {useState} from 'react'

const Header = ({ name }) => {
    return (
      <h2>{name}</h2>
    )
  }
  
  const Part = ({ name, exercises }) => {
    return (
      <p>{name} {exercises}</p>
    )
  }
  
  const Total = ({ parts }) => {
    const exerciseSum = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <p>Total of {exerciseSum} exercises</p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )
  
  
      })
    )
  }
  const Course = ({ courses }) => {
    //const [courses, setCourses] = useState(courses)
    return (
      courses.map((course) => {
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        )
      }
      )
  
  
    )
  }

  export default Course