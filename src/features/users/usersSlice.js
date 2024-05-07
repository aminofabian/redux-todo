import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: 'Joan Meli'
  },
  {
    id: 1,
    name: 'Mike Nuwi'
  },
  {
    id: 3,
    name: 'Kennedy Wefwafwa'
  }

]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }

})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;