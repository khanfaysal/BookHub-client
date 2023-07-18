import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    postBook: builder.mutation({
      query: ({data}) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
    }),

    getLastUpdatedBooks: builder.query({
      query: () => "/books/last-updated",
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useGetLastUpdatedBooksQuery,
  usePostBookMutation,
} = bookApi;
