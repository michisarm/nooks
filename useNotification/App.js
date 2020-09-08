import React from 'react'
import useNotification from './useNotification'

export default function App() {
  const triggerNOtif = useNotification("Can I steal page", {body:"test"});
  return (
    <div style={{height:"1000vh"}}>
      <button onClick={triggerNOtif}>hello</button>
    </div>
  )
}
