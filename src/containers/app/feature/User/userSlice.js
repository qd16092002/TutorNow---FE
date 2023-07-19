import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  calendar: {},
  documents: {}
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
    setCalendar: (state, action) => {
      state.calendar = action.payload
    },
    setDocuments: (state, action) => {
      state.documents = action.payload
    }
  }
})

export const { increment, decrement, setCalendar, setDocuments } = userSlice.actions

export default userSlice.reducer
