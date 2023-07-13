import React, { useReducer} from 'react'

const initialState=0
function reducer(state,action){
    switch (action.type){
        case "incriment":
            return state +1
        case "decriment":
            return state -1
        default :
        throw new Error
    }

}

const TestCount = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"incriment"})}>Incriment</button>
      <button onClick={()=>dispatch({type:"decriment"})}>Decriment</button>
    </div>
  )
}

export default TestCount