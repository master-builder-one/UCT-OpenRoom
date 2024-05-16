import React from 'react'

function GlobalFiltering(filter, setFilter) {
  return (
    <span>
      Search: {' '}
      <input value={filter || ''}
      onChange={e => setFilter(e.target.value)}></input>
    </span>
  )
}

export default GlobalFiltering