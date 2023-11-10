// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  
  const inputRef = React.useRef();

  const [error, setError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    onSubmitUsername(value)
  }

  const handleChange = (event) => {
    const { value } = event.target;
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : "must be lowercase");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='id'>Username:</label>
        <input ref={inputRef} id='id' type="text" onChange={handleChange}/>
        <div style={{color: "red" }}>{error}</div>
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
