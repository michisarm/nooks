import React from 'react'
import useBeforeLeave from './useBeforeLeave'

export default function App() {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      Hi
    </div>
  )
}
