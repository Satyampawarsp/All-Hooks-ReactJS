import React, { useEffect, useMemo, useState } from 'react'

const UseMemoHook = () => {


  const [number,setnumber]=useState(0)

  const [counter,setCounter]=useState(0)

  const cube=(num)=>{
    console.log('calculation done!.')
    return Math.pow(num,2)
  }

const result=useMemo(()=>cube(Number(number)),[number])

  
  return (  
    <>
    <h1>uee Memo hook returns the Memoized Value.(its like catching a value so that it doesnot need to recalculate) </h1>
    <h3>the use memo hook only runs when one of its dependncise get updated this can used to <mark>Improve the Performance optimisation</mark></h3>
    <center>
      <input type="text" value={number} onChange={(e)=>setnumber(e.target.value)} />
      <p>cube of {number}={result}</p>
      <button onClick={()=>setCounter(counter+1)} >count++</button>
      <h1>Counter:{counter}</h1>
    </center>

  </>
  )
}

export default UseMemoHook
