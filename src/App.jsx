import React from 'react'
import UseStateHook from './useStateHook'
import UseEffectHook from './useEffectHook'
import UserefHook from './useRefHook'
import UseMemoHook from './useMemoHook'
import UseCallbackHook from './useCallbackHook'

const App = () => {
  return (
  <>
  <h1>all react Hooks</h1>
  <UseStateHook/>
  <hr />
  <UseEffectHook/>
  <hr />
  <UserefHook/>
  <hr />
  <UseMemoHook/>
  <hr />
  <UseCallbackHook/>
  </>
  )
}

export default App
