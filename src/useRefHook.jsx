import React, { useEffect, useRef, useState } from 'react'

const useRefHook = () => {
  const[value,setValue]=useState(0)
  const count=useRef(0);
  const inputFeild=useRef();
  const getData=()=>{
    console.log(inputFeild.current.value)
    inputFeild.current.style.background='blue'
  }
  useEffect(()=>{
    count.current=count.current+1
    //here what we are doing is we are holding the state variable and increment the count in useEffetct without dependacy
    //if we go with normal state variable the state goes to infinte loop so avoid it we use the useRef hook 
  })
  return (
    <>
     <h1>useRef is a React hook that allow us to create mutable Variables Which will not re-render the Components.
      it is also used to Access the DOM elements  .
      <mark>here what we are doing is we are holding the state variable and increment the count in useEffetct without dependacy..</mark>
      <mark>if we go with normal state variable the state goes to infinte loop so avoid it we use the useRef hook </mark>
    </h1>
    <h1>Example 1</h1>
    <button onClick={()=>setValue((prev)=>prev+1)} >+1</button>
    <p>{value}</p>
    <button onClick={()=>setValue((prev)=>prev-1)} >-1</button>
    <h1>You are render {count.current} Times </h1> 

    <h1>Example 2 </h1>

    <input type="text" ref={inputFeild} />
    <button onClick={getData} >Submit</button>
    </>
  )
}

export default useRefHook
