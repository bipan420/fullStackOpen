import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"

import noteService from './services/notes'

const Note = ({note, toggleImportance}) => {
  const label = note.important ? 'make not important': 'make important' 
  return(
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

const App = () => {
  const [notes, setNotes] = useState([{id: 1,
    content: "Html is easy",
    important: true
  }])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    noteService
    .getAll()
    .then(response => {
      setNotes(response.data)
    })
  },[])


  const noteFieldChange = (event) => {
    setNewNote(event.target.value)
  }


  const createNote = (event) => {
    event.preventDefault()
    const noteObject = {
      // id: String(notes.length + 1),
      content: newNote,
      important: Math.random > 0.5
    } 
    // axios.post('https://animated-space-capybara-pg46qwxvq5p3777q-3001.app.github.dev/notes',noteObject)
    // .then(response => {
    //   setNotes(notes.concat(response.data))
    // setNewNote('')
    // })

    noteService
    .create(noteObject)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
    
  }

  const toggleImportanceOf = (id) => {
    const url = `https://animated-space-capybara-pg46qwxvq5p3777q-3001.app.github.dev/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    // axios.put(url, changedNote).then(response => {
    //   console.log("the response", response.data)
    //   setNotes(notes.map(n => n.id === id ? response.data : n))
    // })

    axios
    .update(id, changedNote)
    .then(response => {
      setNotes(notes.map(n => n.id === id ? response.data : n))
    })
  }


  return (
    <div>
      <form onSubmit={createNote}>
        Notes: <input type="text" value={newNote} onChange={noteFieldChange} />
        <button type="submit">Save</button> 
      </form>
      {notes.map(note => {
        return (
          <Note
          key={note.id}
           note={note}
           toggleImportance={() => toggleImportanceOf(note.id)}/>
        )
      })}
    {
      
    }
    </div>
  )
}

export default App