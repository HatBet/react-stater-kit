import './style.scss';
import './tailwind.css';
import { forwardRef, useRef } from "react";

// 1. yöntem 
// function Input ( props, ref) {
//   return <input ref={ref} type="text" {...props} />
// }

// Input = forwardRef(Input)

const  Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />
})

function Ders7() {

  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus()
  }
  return (
    <>
      <h1> useRef() -  forwardRef()</h1>
      <Input ref={inputRef}/>
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

export default Ders7;


// Ref ile ulaşılacak element bir component ise forward ile kullanılmalı
