import React from 'react'
import useTitle from './useTitle'

export default function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(()=> titleUpdater("Home"),5000)
  return (
    <div>
      <div>title</div>
    </div>
  )
}
