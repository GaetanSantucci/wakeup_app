import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://wakeupbox.fr/api/v1';

const options = {
  reducerPath: 'apiProduct',
  baseQuery: fetchBaseQuery({ baseUrl }),
  //RTK Query lets us define relationships between queries and mutations to enable automatic data refetching, using "tags"
  tagTypes: ['GET'],

  endpoints: (build) => ({

    getAllPlates: build.query({
      query: () => '/plates',
      providesTags: ['GET']
    }),

    // createRental: build.mutation({
    //   query: (payload) => ({
    //     url: `/rentals`,
    //     method: 'POST',
    //     body: payload,
    //   }),
    //   invalidatesTags: ['GET']
    // }),
  }),
};

export const productApiSlice = createApi(options);
export const { usegetAllPlatesQuery } = productApiSlice;
export default productApiSlice.reducer;