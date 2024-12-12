const Persons = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.length > 0 ? (filteredPersons.map(person => {
        return (
          <p key={person.name}>{person.name} {person.number}</p>
        )
      }
      )) :
        <p>Not found</p>}
    </div>
  )
}
export default Persons