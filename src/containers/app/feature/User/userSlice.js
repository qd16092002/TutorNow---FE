import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  team: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setchangeUser: (state, action) => {
      state.user = { ...action.payload }
    },
    setPassWord: (state, action) => {
      state.user = action.payload
    },
    setchageTeam: (state, action) => {
      state.team = action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
