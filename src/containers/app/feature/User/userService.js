/* eslint-disable no-undef */
import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from '@src/configs/customFetchBase'

// const competitionName = process.env.competition_id

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    getPersonalPerformation: build.query({
      query: () => ({
        url: `/user/performance`
      })
    }),
    getPublicPerformance: build.query({
      query: (username) => ({
        url: `/user/performance/${username}`
      })
    }),
    getPublicInformation: build.query({
      query: (username) => ({
        url: `/user/${username}`
      })
    }),
    getData: build.query({
      query: (args) => ({
        url: `/data/download_link`,
        params: args,
        responseHandler: async (response) => {
          if (response.status === 200) {
            return await response.json()
            // window.location.assign(window.URL.createObjectURL(await response.blob()))
          } else {
            return await response.json()
          }
        },
        cache: 'no-cache'
      })
    }),
    verifyEmail: build.mutation({
      query: (body) => ({
        url: '/user/verify',
        method: 'POST',
        body: body
      })
    }),
    getUserPersonalInformation: build.query({
      query: () => ({
        url: `/user`
      })
    }),
    changeUserInformation: build.mutation({
      query: (body) => {
        return {
          url: '/user',
          method: 'PUT',
          body: body,
          responseHandler: async (response) => {
            const responseBody = await response.json()
            return responseBody
          }
        }
      }
    }),
    changeUserPassWord: build.mutation({
      query: (body) => {
        return {
          url: '/user/password',
          method: 'PUT',
          body: body,
          responseHandler: async (response) => {
            const responseBody = await response.json()
            return responseBody
          }
        }
      }
    }),
    createApiKey: build.mutation({
      query: () => {
        return {
          url: '/data/api-key',
          method: 'POST'
        }
      }
    }),
    getApiKey: build.query({
      query: () => {
        return {
          url: '/data/api-key'
        }
      }
    }),
    forgotPassword: build.mutation({
      query: (body) => {
        return {
          url: '/user/forgot-password',
          method: 'POST',
          body: body
        }
      }
    }),
    getSymbolByCategory: build.query({
      query: (args) => {
        return {
          url: '/data/symbols',
          params: args
        }
      }
    }),
    getVerifyCompetition: build.query({
      query: () => {
        return {
          url: '/competition/nestquant_tournament_2023/registered'
        }
      }
    }),
    getLeaderboard: build.query({
      query: () => {
        return {
          url: '/competition/nestquant_tournament_2023/performance/all?submission_type=public-test'
        }
      }
    }),
    getTeamInformation: build.query({
      query: (args) => ({
        // url: `/team`,
        url: `/team?competition_id=nestquant_tournament_2023`,
        params: args
      })
    }),
    changeTeamInformation: build.mutation({
      query: (body) => {
        return {
          url: '/team',
          method: 'PUT',
          body: body,
          responseHandler: async (response) => {
            const responseBody = await response.json()
            return responseBody
          }
        }
      }
    }),
    getTeamMembers: build.query({
      query: () => ({
        url: `/team/members`
      })
    }),
    submitModel: build.mutation({
      query: ({ params, body }) => ({
        url: `/competition/submit/file?competition_id=${params.competitionId}&submission_type=${params.submission}&symbol=${params.symbol}`,
        method: 'POST',
        body: body,
        prepareHeaders: (headers) => {
          headers.set('Content-Type', 'multipart/form-data')
          return headers
        }
      })
    }),
    // https://api-dev.nestquant.com/competition/{competition_id}/performance/{submission_type}/mean-scores
    getSubmissionMeanScores: build.query({
      query: ({ path }) => ({
        url: `/competition/${path.competitionId}/performance/${path.submission}/mean-scores`
        // params: params
      })
    }),
    getSubmissionTimeRecords: build.query({
      query: ({ path, params }) => ({
        url: `/competition/${path.competitionId}/performance/${path.submission}/records`,
        params: params
      })
    }),
    getSubmissionSymbols: build.query({
      query: ({ path }) => ({
        url: `/competition/${path.competitionId}/performance/${path.submission}/symbols`
      })
    }),
    getModelPerformance: build.query({
      query: ({ path, params }) => ({
        url: `/competition/${path.competitionId}/performance/${path.submission}/record`,
        params: params
      })
    }),
    getAllUserPerformance: build.query({
      query: ({ path, params }) => ({
        url: `/competition/${path.competitionId}/performance/all`,
        params: params
      })
    }),
    deleteSubmission: build.mutation({
      query: ({ path, body }) => ({
        url: `/competition/${path.competitionId}/performance/${path.submission}/${path.submission_time}`,
        method: 'DELETE',
        params: body
      })
    })
  })
})

export const {
  useLazyGetDataQuery,
  useGetPersonalPerformationQuery,
  useGetPublicInformationQuery,
  useGetPublicPerformanceQuery,
  useVerifyEmailMutation,
  useChangeUserInformationMutation,
  useChangeUserPassWordMutation,
  useGetUserPersonalInformationQuery,
  useForgotPasswordMutation,
  useLazyGetApiKeyQuery,
  useCreateApiKeyMutation,
  useLazyGetSymbolByCategoryQuery,
  useLazyGetVerifyCompetitionQuery,
  useLazyGetLeaderboardQuery,
  useChangeTeamInformationMutation,
  useLazyGetTeamInformationQuery,
  useLazyGetTeamMembersQuery
} = userApi
