import React, { useContext } from 'react'
import CreateContexs from './Contex/CreateContexs'

const Result = () => {
    const finalData=useContext(CreateContexs)

    console.log(finalData);
  return (
    <>
        {/* <h1>Result Component User Data Fetch from Contex</h1>

        <h3>My Name is {finalData.name}</h3>
        <h3>My email is {finalData.email}</h3>
        <h3>My phone is {finalData.phone}</h3> */}

        {
          finalData.map((item,index)=>{
            return(
              <>
              <h3>My Name is {item.name}</h3>
        <h3>My email is {item.email}</h3>
        <h3>My phone is {item.phone}</h3>
              </>
            )
          })
        }
    </>
  )
}

export default Result