import React, { useEffect } from 'react'

export default function Test() {

  useEffect(() => {
    console.log('Component ilk yüklendiğinde çalıştı')
  }, [])
   
  useEffect (() => {
    console.log('component render oldu')
  })
  return (
    <div>Test</div>
  )
}
