import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
 const [count,setcount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setcount((count=>count+1))
    },1000)
  },[])
  return (
   <>
   <h1>use Effect hook is used to perform side effect on Your Components</h1>
   <p>examples are := fetching data from API</p>
   <p>directly Updating Dom Element</p>
   <p>times like setInterval setTimeout</p>
   <center>I hv render {count} Times!</center>
   </>
  )
}

export default UseEffectHook
