import { createApi } from '@reduxjs/toolkit/query/react'
import { REFRESH_TOKEN_EXPIRATION, RESPONSE_ERROR_STATUS } from '@src/configs'
import customFetchBase from '@src/configs/customFetchBase'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => {
        return {
          url: '/user/login',
          method: 'POST',
          body: body,
          responseHandler: async (response) => {
            const responseBody = await response.json()
            if (responseBody.status !== RESPONSE_ERROR_STATUS) {
              console.log('responseBody', responseBody)
              cookies.set('access_token', responseBody?.accessToken, {
                maxAge: REFRESH_TOKEN_EXPIRATION
              })
            }
            return responseBody
          }
        }
      }
    }),
    verifyOTP: build.mutation({
      query: (body) => {
        return {
          url: 'auth',
          method: 'POST',
          body: new URLSearchParams(body).toString(),
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          responseHandler: async (response) => {
            const responseBody = await response.json()
            if (responseBody.access_token) {
              console.log('responseBody', responseBody)
              cookies.set('access_token', responseBody?.access_token)
            }
            return responseBody
          }
        }
      }
    }),
    signup: build.mutation({
      query: (body) => {
        return {
          url: '/user/signup',
          method: 'POST',
          body: body
        }
      }
    }),
    getLayoutUser: build.query({
      query: () => ({
        url: '/user',
        cache: 'no-cache'
      })
    }),
    oAuthLogin: build.query({
      query: () => ({
        url: '/login/success',
        credentials: 'include',
        responseHandler: async (response) => {
          const responseBody = await response.json()
          console.log('responseBody', responseBody)
          if (response.ok) {
            cookies.set('access_token', responseBody?.metadata?.tokens?.accessToken, {
              maxAge: REFRESH_TOKEN_EXPIRATION
            })
            cookies.set('user_id', responseBody?.metadata?.user?._id, {
              maxAge: REFRESH_TOKEN_EXPIRATION
            })
          }
          return responseBody
        }
      })
    }),
    logout: build.mutation({
      query: () => {
        return {
          url: '/user/logout',
          method: 'POST',
          responseHandler: async (response) => {
            const responseBody = await response.json()
            if (responseBody.code !== 403) {
              // clear cookies
              cookies.remove('access_token')
              cookies.remove('user_id')
            }
            return responseBody
          }
        }
      }
    }),

    refreshToken: build.mutation({
      query: () => {
        return {
          url: '/user/refresh-token',
          method: 'POST',
          responseHandler: async (response) => {
            const responseBody = await response.json()
            if (responseBody.errorStatus !== RESPONSE_ERROR_STATUS) {
              cookies.set('user_id', responseBody?.metadata?.user?._id)
              cookies.set('access_token', responseBody?.metadata?.tokens?.accessToken)
            }
            return responseBody
          }
        }
      }
    })
  })
})

export const {
  useRefreshTokenMutation,
  useLoginMutation,
  useSignupMutation,
  useVerifyOTPMutation,
  useLogoutMutation,
  useLazyGetLayoutUserQuery
} = authApi
