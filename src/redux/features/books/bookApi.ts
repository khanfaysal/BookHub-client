import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    getLastUpdatedBooks: builder.query({
      query: () => '/books/last-updated',
    }),
  }),
});

export const { useGetBooksQuery, useGetLastUpdatedBooksQuery } = bookApi;
