import React, { useState, useEffect, useRef } from 'react'
import ReactDom from 'react-dom'

const useClick = (onClick) => {
  if(typeof onClick !== "function"){
    return;
  }
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return ()=>{
      element.current.removeEventListener("click", onClick);
    }
  }, []);
  return element;
}

export default function App() {

  // ref test
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 5000);

  //click
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      {/* ref test */}
      <div>Hi</div>
      <input ref={potato} placeholder="la"/>

      {/* click test */}
      <h1 ref={title}>Hi</h1>
    </div>
  )
}
