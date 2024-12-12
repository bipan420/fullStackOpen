import { useState } from "react"
const usePhoneBook = () => {
    const [persons, setPersons] = useState([
        {
          name: 'Arto Hellas',
          number: '4344434349'
        },
        {
          name: 'Bipan Bhatta',
          number: '75455434349'
        }
    
      ])
      const [newName, setNewName] = useState('')
      const [newNumber, setNewNumber] = useState('')
      const [filterPerson, setFilter] = useState('')
      const savePhoneBook = (event) => {
        event.preventDefault()
    
        const trimmedName = newName.trim()
        const trimmedNumber = newNumber.trim()
        if (trimmedName === '') {
          alert("Name cannot be empty")
          return
        }
        const found = persons.find(person => person.name === trimmedName)
        if (!found) {
          const person = {
            name: trimmedName,
            number: trimmedNumber
          }
          setPersons(persons.concat(person))
    
        }
        else {
          alert("The person named " + trimmedName + " already exists in the phonebook.")
        }
        setNewName('')
        setNewNumber('')
      }
    
      const nameFieldChanged = (event) => {
        setNewName(event.target.value)
      }
    
      const numberFieldChanged = (event) => {
        setNewNumber(event.target.value)
      }
    
      const filterFieldChanged = (event) => {
        setFilter(event.target.value)
      }
    
      const filteredPersons = persons.filter(person => {
        return person.name.toLowerCase().includes(filterPerson.toLowerCase()) || person.number.includes(filterPerson)
      })
      console.log("filtered persons", filteredPersons)

      return {
        persons,
        newName,
        newNumber,
        filterPerson,
        savePhoneBook,
        nameFieldChanged,
        filterFieldChanged,
        numberFieldChanged,
        filteredPersons,
      }
}
export default usePhoneBook