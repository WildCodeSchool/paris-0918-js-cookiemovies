import React from 'react';

const Suggestions = (props) => {
  
  const options = props.results.map(r => (
    <option key={r.id}
            value={r.title}
            />
  ))
  return <datalist id="movieSuggest">{options}</datalist>
}

export default Suggestions;