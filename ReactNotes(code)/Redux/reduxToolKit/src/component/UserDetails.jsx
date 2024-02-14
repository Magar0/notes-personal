import React from 'react'
import DeleteAllUser from './Delete'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlices'
import DisplayUser from './DisplayUser'

const UserDetails = () => {

  const dispatch = useDispatch();
const addNewUser= (name)=>{
  // console.log(name);
  dispatch(addUser(name))
}

  return (
    <>
    <div className="content">
        <div className="admin-table">
            <div className="admin-subtitle">List of User</div>
            <button className='btn'onClick={()=>addNewUser(fakeUserData())} >Add New User</button>
        </div>
        <ul>
            <DisplayUser />
        </ul>
        <hr/>
        <DeleteAllUser />
    </div>
    </>
  )
}

export default UserDetails