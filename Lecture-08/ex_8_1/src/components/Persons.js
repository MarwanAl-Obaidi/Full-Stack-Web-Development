
function Persons({persons,handleDeletePerson}) {

  return (
     <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}: {person.number} 
           <button onClick={()=>handleDeletePerson(person.name,person.id)}>Delete</button>
          </li>
        ))}
    </ul>
  )
}

export default Persons