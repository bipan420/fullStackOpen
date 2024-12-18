import { useEffect, useState } from "react"
import phonebookService from "../services/phonebook"
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

      useEffect(()=>{
        // axios.get("https://animated-space-capybara-pg46qwxvq5p3777q-3001.app.github.dev/persons")
        // .then(response => {
        //   setPersons(response.data)
        // })

        phonebookService.getAll().then(initialResponse => {setPersons(initialResponse)})
      },[])

      const savePhoneBook = (event) => {
        event.preventDefault()
    
        const trimmedName = newName.trim()
        const trimmedNumber = newNumber.trim()
        if (trimmedName === '') {
          alert("Name cannot be empty")
          return
        }
        const found = persons.find(person => person.name === trimmedName)
        console.log("found", found)
        if (!found) {
          const person = {
            name: trimmedName,
            number: trimmedNumber
          }
          phonebookService
          .savePhonebook(person)
          .then(returnedData => {setPersons(persons.concat(returnedData))})
          
    
        }
        else {
          const confirmReplace = window.confirm(newName +" already exists in the phonebook, replace the old number with a new one ?")
          if (confirmReplace) {
            
            const updatedPerson = {
              name: found.name,
              number: trimmedNumber
            }
            phonebookService
            .updatePhonebook(found.id, updatedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id != found.id ? person: returnedPerson))
            })
          }

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

      const deletePerson = (id) => {
        const toBeDeleted = persons.filter(person => person.id === id)
        // console.log("to be deleted", toBeDeleted[0].name)
        const confirmDelete = window.confirm("Delete "+ toBeDeleted[0].name + " ?")
        if (confirmDelete) {
          phonebookService
        .deletePhonebook(id)
        .then(deletedData => {
          const updatedPerson = persons.filter(person => person.id !== deletedData.id)
          setPersons(updatedPerson)

        })
        }
        
      }

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
        deletePerson
      }
}
export default usePhoneBook