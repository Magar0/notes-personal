import React, {useReducer} from 'react'
import "./style2.css"
const UseReducer = () => {

  const reducer=(state,action)=>{
    if(action.type==="INCR"){
      state+=1;
    }
    if(state>0 && action.type==="DECR"){
      state-=1;
    }
    return state;
  };
  
  const initialData=0;
  const [state, dispatch] = useReducer(reducer, initialData )

  return (
    <>
    <div>
  <p className='value text-white'>{state}</p>
  <div className="btn2 text-white" onClick={()=> dispatch({type:"INCR"})}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
  </div>

  <div className="btn2 text-white"  onClick={()=> dispatch({type:"DECR"})}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    DECR
  </div>
</div>
    </>
  )
}

export default UseReducer