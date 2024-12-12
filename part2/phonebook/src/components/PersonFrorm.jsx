const PersonForm = ({ savePhoneBook, newName, newNumber, nameFieldChanged, numberFieldChanged }) => {
    return (
      <form onSubmit={savePhoneBook}>
        <div>
          name: <input type="text" value={newName} onChange={nameFieldChanged} /> <br />
          number: <input type="text" value={newNumber} onChange={numberFieldChanged} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    )
  }
  export default PersonForm