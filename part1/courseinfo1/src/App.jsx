const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part= {props.part2} exercise={props.exercise2} />
      <Part part = {props.part3} exercise= {props.exercise3} />
    </div>
  )
}

const Total = (props) => {
return (
  <div>
    <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3} </p>
  </div>
)
}

const App = () => {
  const course = "Half stack app development"
  const part1 = "Fundamentals of React"
  const exercise1 = 10
  const part2 = "Using props to pass data"
  const exercise2 = 7
  const part3 = "State of the component"
  const exercise3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} />
      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />

    </div>
  )

}

export default App