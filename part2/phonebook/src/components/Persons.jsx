const DeleteButton = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Persons = ({ filteredPersons,deletePerson }) => {
  return (
    <div>
      {filteredPersons.length > 0 ? (filteredPersons.map(person => {
        return (
          <p key={person.name}>{person.name} {person.number} {<DeleteButton onClick={() => deletePerson(person.id)} text="delete" />}</p>
          
        )
      }
      )) :
        <p>Not found</p>}
    </div>
  )
}
export default Persons