import React from 'react'

function Filter({filter,handleFilterChange}) {
  return (
    <div>
    Filter shown:
    <input value={filter} onChange={handleFilterChange} />
  </div>
  )
}

export default Filter