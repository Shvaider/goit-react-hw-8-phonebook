import { createApi } from '@reduxjs/toolkit/query/react';
import { instanceAxios } from 'redux/auth/authOperations';

const axiosBaseQuery =
  ({ baseURL } = { baseURL: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await instanceAxios({ url: baseURL + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseURL: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contact'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
      url: '/contacts',
      metod: 'GET',
    }),
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const{useGetContactsQuery, useAddContactMutation, useDeleteContactMutation} = contactsApi