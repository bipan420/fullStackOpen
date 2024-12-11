import { useState } from "react"

const Heading = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Anecdote = ({text}) => {
  return (
    <p>{text}</p>
  )
}

const Votes = ({text}) => {

    return (
      <p>has {text} votes</p>
    )
  
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0,7:0})
  const heading1 = "Anecdote of the day"
  const heading2 = "Anecdote with most votes"

  const generateAnecdote = () => {
    const anecdotesLen = anecdotes.length
    const randomIndex = Math.floor(Math.random() * anecdotesLen)
    setSelected(randomIndex)
  }

  const voteAnecdote = () => {

    setVotes((prevVotes) => ({
      ...prevVotes,
      [selected]: votes[selected] + 1
    }))
  }

  const getMaxVotedAnecdote = () => {
    let maxVote = -Infinity
    let maxAnecdote = null
    if (Object.values(votes).every(value => value === 0)) {
      maxVote = 0
      maxAnecdote="No votes casted"
    }
    for (const [key, value] of Object.entries(votes)) {
      if (maxVote < value) {
        maxVote = value
        maxAnecdote = anecdotes[key]
      }
    }

    return {anecdote: maxAnecdote, vote:maxVote}

  }

  const {anecdote: maxAnecdote, vote: maxVote} = getMaxVotedAnecdote()
  
  return (
    <div>
      <Heading text={heading1} />
      <Anecdote text={anecdotes[selected]} />
      <Votes text={maxVote} />
      <Button onClick={generateAnecdote} text="next anecdote" />
      <Button onClick={voteAnecdote} text="vote" />
      <Heading text={heading2} />
      <Anecdote text={maxAnecdote} />
    </div>
  )
}

export default App