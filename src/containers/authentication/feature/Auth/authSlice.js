import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = {}
    }
  }
})

export const { setUser, logout, login } = authSlice.actions

export default authSlice.reducer
