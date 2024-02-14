import React, { useContext } from 'react'
import { First, Second } from './MainApp'

const UseContext = () => {

    const fName = useContext(First)
    const lName = useContext(Second)

  return (
<>
<h2>This is useContext Hook {fName} {lName} </h2>
</>

    )
}

export default UseContext