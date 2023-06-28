import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const rtkQueryToastify = () => (next) => (action) => {
  if (isRejectedWithValue()) {
    toast.warn(action.payload?.data?.errMessage)
  }
  return next(action)
}
