import React, { useEffect, useState } from 'react'

export default function Test() {

  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Component ilk yüklendiğinde çalıştı, ComponentDidMount')

    return() => {
      console.log('componentUnMount')
    }
  }, [])

  useEffect(()=>{
    console.log('count değeri değişti =' , count)
  }, [count])
   
  useEffect (() => {
    console.log('component render oldu, ComponentDidUpdate')
  })
  return (
    <div>
      <h3> {count}</h3>
      <button onClick={() => setCount(count => count + 1 )}>Arttır </button>
      <hr/>
      Test
      
    </div>
  )
}
