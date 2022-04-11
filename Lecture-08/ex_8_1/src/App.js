import { useState, useEffect } from 'react' 

import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from './services/persons'
import Notification from './components/Notification'

import './app.css'
 

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
      personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })    

  }, [])

  
  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const index= persons.findIndex( p => p.name === newName )
   console.log(index);

    if(index !== -1){
      // alert(`${newName} is already added to phonebook`)
      const msg=`${personObject.name} is already added to the phonebook, replace the old number with a new one ?`
      if (window.confirm(msg)){
        personService
        .update(persons[index].id, personObject)
        .then(response => {
          setPersons(persons.map(p => (p.name === newName ? personObject : p))          )
          setNewName('')
        })  
      }
   
    }
    else {         
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
      })
      setMessage({
        payload:`Added ${newName}`,
        status:'success'
      }
      )
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    
    }

   
  };

  //better to use this
  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumberChange = (e) => setNewNumber(e.target.value)
  
  const handleFilterChange =(e) => {
    setFilter(e.target.value)
    setPersons(persons.filter((person) =>
      (person.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)))
  }

  const handleDeletePerson = (name, id) => {
    if (window.confirm(`Delete ${name} ?`)) {
      //console.log(`${name} Deleted`);
      personService
      .deletePerson(id)
      .then(response => {
        //console.log("ok");
        setPersons(persons.filter(person => person.id !== id));
      })   
    }
  }

  const formData = {
    addPerson,
    handleNameChange,
    handleNumberChange,
    newName,
    newNumber,
  }

  return (
    <>
    <h1>Phonebook</h1>
    <Notification message={message}/>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm formData={formData}/>
      <h2>Numbers</h2>
      <Persons persons={persons} handleDeletePerson={handleDeletePerson}/>      
    </>
  );
};

export default App;
