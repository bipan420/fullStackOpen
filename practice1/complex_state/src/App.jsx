import { useState } from "react"

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>The app is used by pressing the buttons</div>
    )
  }

  return (
    <div>Button press history: {allClicks.join(' ')}</div>
  )
}


const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  const allNotes = [
    {
      content: "Hello world",
      important: true,
      id: 1
    }
  ]
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
    factor: 0
  })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [notes, setNotes] = useState(allNotes)
  const [newNote, setNewNote] = useState("new note here...")
  const [showAll, setShowAll] = useState(true)
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const newClicks = {
      ...clicks,
      left: clicks.left+1
    }
    setClicks(newClicks)
    
    setTotal(newClicks.left + newClicks.right + newClicks.factor)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const newClicks = {
      ...clicks,
      right: clicks.right+1
    }
    setClicks(newClicks)
    setTotal(newClicks.left + newClicks.right + newClicks.factor)
  }

  const increaseBy = (incValue) => () => {
      const newClicks = {
        ...clicks,
        factor: clicks.factor + incValue
      }
      setClicks(newClicks)
      setTotal(newClicks.left + newClicks.right + newClicks.factor)
    }

  

  const addNote = (event) => {
    event.preventDefault()
    
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes: notes.filter(note => note.important===true)

  
  return (
    <div>
      <History allClicks={allClicks} />
      <p>{clicks.left}</p>
      <p>{clicks.right}</p>
      <p>Total {total}</p>
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      <Button onClick={increaseBy(100)} text="Increase by 100" />
      <Button onClick= {increaseBy(1000)} text="Increase by 1000" />
      <form onSubmit={addNote}>
        Value: <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit" >save</button>
      </form>

      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important': 'all'}
      </button>

      {notesToShow.map(note => {
        console.log("id", note.id)
        return(
          <div key={note.id}>
            <p>{note.content}</p>
             </div>
        )
      })}
      
    </div>
  )
}
export default App