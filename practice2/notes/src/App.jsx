import { useState } from "react"

const App = () => {
  const [notes, setNotes] = useState([{id: 1,
    content: "Html is easy",
    important: true
  }])
  const [newNote, setNewNote] = useState('')

  const noteFieldChange = (event) => {
    setNewNote(event.target.value)
  }

  console.log("notes", notes)

  const createNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: String(notes.length + 1),
      content: newNote,
      important: Math.random > 0.5
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  return (
    <div>
      <form onSubmit={createNote}>
        Notes: <input type="text" value={newNote} onChange={noteFieldChange} />
        <button type="submit">Save</button> 
      </form>
      {notes.map(note => <p key={note.id}>{note.content}</p>)}
    </div>
  )
}

export default App