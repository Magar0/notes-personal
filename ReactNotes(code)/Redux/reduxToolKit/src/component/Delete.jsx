import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../store/slices/UserSlices'

const DeleteAllUser = () => {

  const dispatch = useDispatch()

  const deleteAll =()=>{
dispatch(deleteUsers())
  }

  return (
    <button className='btn btn-remove'onClick={deleteAll} >Remove All</button>
  )
}

export default DeleteAllUser;