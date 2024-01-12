import { useState } from 'react'


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)


  const anecdotesLength = anecdotes.length
  const initialVotes = new Array(anecdotesLength).fill(0)
  const [votes, setVotes] = useState(initialVotes)

  const generateAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotesLength)
    setSelected(randomIndex)
    console.log(randomIndex)
  }


  const vote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
    console.log('votes', votes)
    console.log('initial votes', initialVotes)
    console.log('votescopy', votesCopy)
  }

  const highestValue = Math.max(...votes)
  const highestIndex = votes.indexOf(highestValue)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {votes[selected]} votes <br />
      <Button onClick={vote} text='Vote' />
      <Button onClick={generateAnecdote} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[highestIndex]}<br />
      has {votes[highestIndex]} votes
    </div>
  )
}

export default App;