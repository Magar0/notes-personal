import React from 'react'
import { First, Second } from './MainApp'

const ComC = () => {


  return (
    <>
      <First.Consumer >
        {(fName) => {
          return (
            <Second.Consumer>
              {(lName) => {
                
               return <div>This is React Context {fName} {lName} </div>

              }}
            </Second.Consumer>
          )
        }}
      </First.Consumer>



    </>
  )
}

export default ComC