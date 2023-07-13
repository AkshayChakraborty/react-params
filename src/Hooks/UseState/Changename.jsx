import React, { useState } from 'react'
//import '../Components/Style.css'


export const Changename = () => {

    const [myName, setmyName] = useState("Rahul");
    
    // let temp = myName;

    const Change = () => {
        if (myName === "Rahul") 
        {

            setmyName("Ajay")
        }
        else {
            setmyName("Rahul")
        }

    }
    return (
        <>
            <div className='box2'>
                <h1 className='text-info'>Single Click Name Change</h1>
                <h1>My Name Is:{myName}</h1>
                <button className="btn btn-outline-success" onClick={Change}>Click To Change</button>
            </div>
        </>
    )
}
export default Changename;