import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    getLastUpdatedBooks: builder.query({
      query: () => '/books/last-updated',
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery, useGetLastUpdatedBooksQuery} = bookApi;
