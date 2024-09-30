import { createSlice } from "@reduxjs/toolkit";
const state = {
    user: null,
  };
const userSlice = createSlice({
    name: 'user',
    initialState: state,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },

        removeUser: (state) => {
            return null;
        },
    },
});
export default userSlice.reducer
export const { addUser, removeUser } = userSlice.actions