import React from 'react'
//import '../Components/Style.css'
import {useState} from 'react';
export const NamechangeAuto = () => {

    const initialText = 'Rahul';
    const [buttonText, setButtonText] = useState(initialText);
  
    function handleClick() {
      setButtonText('Ajay');
  
      setTimeout(() => {
        setButtonText(initialText);
      }, 1000);
    }


  return (
    <>
     <div className='box4'>
        <h1 className='text-success'>Auto Name Change</h1>
      <button id="btn3" className="btn btn-outline-info" onClick={handleClick}>{buttonText}</button>
    </div>
    </>
  )
}