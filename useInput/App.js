import React from 'react'
import useInput from './useInput'

export default function App() {
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <input placeholder="name" {...name}/>
    </div>
  )
}
