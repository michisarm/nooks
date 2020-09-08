import React from 'react'
import useNetwork from './useNetwork'

export default function App() {
  const handleNetworkChange = onLine => {
    console.log(onLine ? "online": "offline")
  }
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  )
}
