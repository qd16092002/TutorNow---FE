import { combineReducers } from 'redux'
import authReducer from '@src/containers/authentication/feature/Auth/authSlice'
import userReducer from '@src/containers/app/feature/User/userSlice'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'
import { userApi } from '@src/containers/app/feature/User/userService'

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  authApi: authApi.reducer,
  userApi: userApi.reducer
})
