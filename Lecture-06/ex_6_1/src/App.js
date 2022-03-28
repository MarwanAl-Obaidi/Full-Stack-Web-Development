import React from "react";

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({name, exercise}) => {
  return (
    <p>{name} {exercise}</p>
  )
}

const Content = ({parts}) => {
    const [part_one, part_two, part_three] = parts;
  return (
    <div>
        <Part name={part_one.name} exercise={part_one.exercises}/>
        <Part name={part_two.name} exercise={part_two.exercises}/>
        <Part name={part_three.name} exercise={part_three.exercises}/>
    </div>
  )
}

const Total = ({parts}) => {
    const [part_one, part_two, part_three] = parts;
  return (
    <p>Number of exercises {part_one.exercises + part_two.exercises + part_three.exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 2
      },
      {
        name: 'State of a component',
        exercises: 4
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App