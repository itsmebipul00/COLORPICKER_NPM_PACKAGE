import React, { useRef, useEffect } from "react";
import './App.css'

function Theme () {
  const inputRef = useRef(null)
  
  useEffect(() => {
    const presentTheme = localStorage.getItem("theme");
    if (presentTheme) {
      inputRef.current.ownerDocument.body.style.backgroundColor= presentTheme
    }
  },[]);

  function SwitchColour(e) {
    console.log(inputRef)
    localStorage.setItem('theme', `${e.target.value}`)
    inputRef.current.ownerDocument.body.style.backgroundColor= e.target.value
  }
    return <input ref={inputRef} type="color" id="colorPicker" onChange={SwitchColour} />
}

export default Theme