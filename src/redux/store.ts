// import {configureStore} from "@reduxjs/toolkit";
// import bookReducer from './features/books/bookSlice';
// import { api } from "./api/apiSlice";

// export const store = configureStore({
//     reducer: {
//         book: bookReducer,
//         [api.reducerPath]: api.reducer
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;

// export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import bookReducer from './features/books/bookSlice';
import { api } from './api/apiSlice';

const storedLastUpdatedBooks = JSON.parse(localStorage.getItem('lastUpdatedBooks') || '[]');

export const store = configureStore({
  reducer: {
    book: bookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: [...getDefaultMiddleware(), api.middleware],
  preloadedState: {
    book: {
      books: [],
      lastUpdatedBooks: storedLastUpdatedBooks,
      searchQuery: '',
      genreFilter: '',
      yearFilter: '',
      genres: [],
      years: [],
    },
  },
});
export default store;