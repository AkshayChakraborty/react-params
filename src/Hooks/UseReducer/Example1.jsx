import React, { useReducer} from 'react'

const initialState=0
function reducer(state,action){
    switch (action.type){
        case "incriment":
            return "Akshay"
        case "decriment":
            return "Chakraborty"
        default :
        throw new Error
    }

}

const TestCount = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"incriment"})}>Next</button>
      <button onClick={()=>dispatch({type:"decriment"})}>Previous</button>
    </div>
  )
}

export default TestCount