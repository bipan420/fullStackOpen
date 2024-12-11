import { useState } from "react"

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
  const [lastIndex, setLastIndex] = useState(null)
  const [votes, setVote] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0})

  const generateAnecdote = () => {
    const anecdotesLen = anecdotes.length
    
    let randomIndex
    do {
      randomIndex = Math.floor((Math.random() * anecdotesLen))
    } while (randomIndex === lastIndex)
    
      setLastIndex(randomIndex)
      setSelected(randomIndex)
      console.log("Random Index: " + randomIndex)

  }

  const voteAnecdote = () => {
    setVote((prevVotes)=> ({
      ...prevVotes,
      [selected]: votes[selected] + 1
    }))
  }

  const getMaxVotedAnecdote = () => {
    let maxKey = null
    let maxVotes = -Infinity

    for (const [key, value] of Object.entries(votes)) {
      if (value>maxVotes) {
        maxVotes = value
        maxKey = key
      }
    }
    return { anecdote: anecdotes[maxKey], votes: maxVotes }
    //return anecdotes[maxKey]
  }

  const { anecdote: maxAnecdote, votes: maxVoteCount } = getMaxVotedAnecdote()



  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={voteAnecdote} text="vote" />
      <Button onClick={generateAnecdote} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <p>{maxAnecdote}</p>
      <p>has {maxVoteCount} votes</p>
    </div>
  )
}

export default App
