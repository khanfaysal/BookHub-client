

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import bookReducer from './features/books/bookSlice';
import { api } from './api/apiSlice';
import userReducer from './features/user/userSlice';

const storedLastUpdatedBooks = JSON.parse(localStorage.getItem('lastUpdatedBooks') || '[]');

const store = configureStore({
  reducer: {
    book: bookReducer,
    user: userReducer,
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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
