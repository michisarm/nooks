import React from 'react'
import useFullScreen from './useFullScreen'

export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "full" : "small")
  }
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div style={{height:"1000vh"}}>
      <div ref={element}>
        <img src="http~"/>
        <button onClick={exitFull}>exitFullScreen</button>
      </div>
      <button onClick={triggerFull}>fullScreen</button>
    </div>
  )
}
