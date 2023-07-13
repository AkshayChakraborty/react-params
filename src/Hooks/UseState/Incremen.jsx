import React from 'react'
//import '../Components/Style.css'
import { useState } from "react";


export const Increment = () => {

  let [num, setNum] = useState(0);

  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  let Change = (e) => {
    setNum(e.target.value);
  }
  return (
    <>

<div className='box text-primary'>
<h1> Increase/Decrease </h1>
      <button className="btn btn-outline-danger" type="button" onClick={decNum}>(--)Decrease</button>

      <input type="text" className="text1" value={num} onChange={Change} />

      <button className="btn btn-outline-success" type="button" onClick={incNum}>(++)Increase</button>

</div>

    </>

  )
}
export default Increment;