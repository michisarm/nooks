import React from 'react'
import useAxios from './useAxios'

export default function App() {
  const { loading, data, error, refetch } = useAxios({url: "https:~~"});
  console.log(`Loading: ${loading} \n Error: ${error} \n Data: ${data}`)
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}></button>
    </div>
  )
}
