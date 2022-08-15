import React, { useEffect, useState } from 'react'

export default function Test() {

  const [postId, setPostId] = useState(1)
  const [post, setPost] = useState(false)

  useEffect(() => {
    console.log('Component ilk yüklendiğinde çalıştı, ComponentDidMount')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    let Interval = setInterval(() => console.log('Interval çalıştı'), 1000)
    return() => {
      console.log('componentUnMount')
      clearInterval(Interval)
    }
  }, [])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => setPost(data))
  }, [postId])
   
  // useEffect (() => {
  //   console.log('component render oldu, ComponentDidUpdate')
  // })

  return (
    <div>
      <h3> {postId}</h3>
      
      <button onClick={() => setPostId(postId => postId + 1 )}>Sonraki Konu </button>
      <hr/>
      Test
      
    </div>
  );
}
