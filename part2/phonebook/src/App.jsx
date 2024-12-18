import React from 'react';
import usePhoneBook from './hooks/usePhoneBook'
import PersonForm from './components/PersonFrorm'
import Persons from './components/Persons'
import Filter from  './components/Filter'



const App = () => {
  const {
    newName,
    newNumber,
    filterPerson,
    savePhoneBook,
    nameFieldChanged,
    numberFieldChanged,
    filterFieldChanged,
    filteredPersons,
    deletePerson
  } = usePhoneBook();

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filterPerson={filterPerson}
        filterFieldChanged={filterFieldChanged} />

      <h3>Add a new</h3>

      <PersonForm
        savePhoneBook={savePhoneBook}
        newName={newName}
        nameFieldChanged={nameFieldChanged}
        newNumber={newNumber}
        numberFieldChanged={numberFieldChanged}
      />

      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App