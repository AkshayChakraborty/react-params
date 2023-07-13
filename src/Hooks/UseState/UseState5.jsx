import React, { useState } from 'react'

export const UseState5 = () => {
    const [buttonText, setButtonText] = useState('Rahul');
  
    function Click1() {
      setButtonText('Ajay');
    }
    function Click2() {
      setButtonText('Rahul');
    }
    return (
    
  <>
   <div className="box2 text-warning">
    <h1>Name Change</h1>
    <button id="btn1" className="btn btn-outline-danger" onClick={Click1}>{buttonText}</button>
    <button id="btn2" className="btn btn-outline-success" onClick={Click2}>{buttonText}</button>
  </div>
  
  
  </>
    )
  }
  
 