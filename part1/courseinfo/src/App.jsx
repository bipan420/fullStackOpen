const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p> {props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  // console.log('Hello parts' + props.part)
  let names = []
  let exercises = []
  props.parts.forEach(part => {
    names.push(part['name'])
    exercises.push(part['exercises'])
  })

  console.log("Names" + names)
  console.log("Exercises:" + exercises)
  return (
    <div>
      <Part part={names[0]} exercises={exercises[0]} />
      <Part part={names[1]} exercises={exercises[1]} />
      <Part part={names[2]} exercises={exercises[2]} />

    </div>

  )

}



const Total = (props) => {
  console.log(props.parts[0]['exercises'])
  let sum = 0
  props.parts.forEach(part => sum += part['exercises'])
  return (
    <div>
      <p> Total Number of exercises {sum} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course['name']} />
      <Content parts={course['parts']} />
      <Total parts={course['parts']} />

    </div>
  )
}

export default App
