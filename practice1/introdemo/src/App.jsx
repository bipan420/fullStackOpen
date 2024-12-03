const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}. You are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  const age = 18
  const friends = [{name: 'John', age: 21},
    {name: 'Jenny', age: 19}
  ]
  return (
    <div>
    <h1>Greetings</h1>
    <Hello name='George' age={20} />
    <Hello name='Jenny' age={age + 5} />
    <Hello name='Daisy' age={10+16} />
    <p>Name: {friends[0].name}, Age: {friends[0].age}</p>
    </div>
  )
}
export default App