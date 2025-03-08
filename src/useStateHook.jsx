import React, { useState } from 'react'

const useStateHook = () => {
const [initail,setInitial]=useState(0)

const incriment=()=>{

  setInitial((prev)=>prev+5)

}
const decriment=()=>{
setInitial((hasbdiash)=>hasbdiash-1)
}
 

  return (
    <>
    <h1>lets Create Counter with UseState Hook</h1>
    <button id='1' onClick={incriment}>Incriment</button>
    <p>count={initail}</p>
    <button  id='2' onClick={decriment} >Decriment</button>
    </>
  )
}

export default useStateHook
