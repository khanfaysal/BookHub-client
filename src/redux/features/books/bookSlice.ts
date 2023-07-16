import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
}

interface BookState {
  books: Book[];
  searchQuery: string;
  genreFilter: string;
  yearFilter: string;
  genres: string[]; // Add genres property
  years: string[]; // Add years property
}

const initialState: BookState = {
  books: [],
  searchQuery: '',
  genreFilter: '',
  yearFilter: '',
  genres: [], // Initialize genres as an empty array
  years: [], // Initialize years as an empty array
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setGenreFilter: (state, action: PayloadAction<string>) => {
      state.genreFilter = action.payload;
    },
    setYearFilter: (state, action: PayloadAction<string>) => {
      state.yearFilter = action.payload;
    },
    setGenres: (state, action: PayloadAction<string[]>) => {
      state.genres = action.payload;
    },
    setYears: (state, action: PayloadAction<string[]>) => {
      state.years = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setGenreFilter,
  setYearFilter,
  setGenres,
  setYears,
} = bookSlice.actions;
export default bookSlice.reducer;
