import React, { useEffect, useState } from 'react';
import "./style2.css";

const UseState = () => {
const initialData=0
  const [num,setNum]=useState(initialData);
  useEffect(()=>{
    document.title=`Use Effects(${num})`
  })

  return (
<>
<div>
  <p className='value text-white'>{num}</p>
  <div className="btn2 text-white" onClick={()=> setNum(num+1)}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
  </div>

  <div className="btn2 text-white"  onClick={()=> num>0 ? setNum(num-1): setNum(0)}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    DECR
  </div>
</div>
</> 
)}

export default UseState