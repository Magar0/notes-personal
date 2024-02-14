import React, { createContext} from 'react'
import ComA from './ComA'


const First = createContext()
const Second = createContext()


const MainApp = () => {
  return (
    <>
      <First.Provider value={"Rakesh"}>
        <Second.Provider value={"Thapa"}>

          <ComA />

        </Second.Provider>
      </First.Provider>
    </>
  )
}

export default MainApp;
export { First, Second }