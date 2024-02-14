import { createSlice } from "@reduxjs/toolkit";
// import { clearAllUserImport } from "../actions";

const userSlice = createSlice({
    name:"user",
    initialState: [],
    reducers : {
        addUser(state,action) { 
        state.push(action.payload);},
        removeUser(state,action){
           state.splice(action.payload, 1)
        },
        deleteUsers(state, action){
          return [];
        },
    }
})

// extraReducer(builder){
//   builder.addCase(userSlice.actions.deleteUsers,()=>{
//     return [];
//   })
// }

// extraReducer(builder){
//   builder.addCase(clearAllUserType,()=>{
//     return [];
//   })
// }

export default userSlice.reducer;

export const { addUser , removeUser, deleteUsers } = userSlice.actions