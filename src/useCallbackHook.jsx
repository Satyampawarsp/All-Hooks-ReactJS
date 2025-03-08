import React, { useCallback, useState } from 'react'
import Header from './componets/header'

const UseCallbackHook = () => {

  const [count,setcount]=useState(0)
  const newFun=useCallback(()=>{},[])
  return (
    <div>
      <h1>UseCallback Hook is  a react hook that let you catch the functional defination between Re-Renders</h1>
      <h1>It means , when we use the callback Hook <mark>it doesnot create Multiple Instance of same Function when Re-Render Happens</mark> </h1>
      <p>Insred of creating new instance of the Function it provides the cached Function on Re-Render of Components</p>
      <h3>the Componet in the Header section will be Rendering many times Because of <mark>Refrenshial Equality</mark> let get it with example const f1=()=>"hello" and const f2=()=>"hello" if we do f1===f2 the result will be false beacuse of creating function on <mark>differnt memory location</mark> </h3>
      <center>
        <Header newFun={newFun}/>
        <h1>Count:{count}</h1>
        <button onClick={()=>setcount((count)=>count+1)} >Count++</button>
      </center>
    </div>
  )
}

export default UseCallbackHook
