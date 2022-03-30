import React from 'react'

const Header = ({course}) => {
  return (
    <h2>{course}</h2>
  )
}

const Part = ({name, exercise}) => {
  return (
    <p>{name} {exercise}</p>
  )
}

const Total = ({parts}) => {
  return (
    <h4>total of {parts.reduce((total, part) => {
        return total + part.exercises
    },0)} exercises</h4>
  )
}

const Content = ({parts}) => {
  return (
    <div>
    {parts.map(part =>
      {
            return <Part key={part.id} name={part.name} exercise={part.exercises} />
        })}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

export default Course
