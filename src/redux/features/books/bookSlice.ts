import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
  updatedAt: string;
}

interface BookState {
  books: Book[];
  lastUpdatedBooks: Book[];
  searchQuery: string;
  genreFilter: string;
  yearFilter: string;
  genres: string[]; 
  years: string[]; 
}

const initialState: BookState = {
  books: [],
  lastUpdatedBooks: [],
  searchQuery: '',
  genreFilter: '',
  yearFilter: '',
  genres: [], 
  years: [], 
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setLastUpdatedBooks: (state, action: PayloadAction<Book[]>) => {
      state.lastUpdatedBooks = action.payload;
      localStorage.setItem('lastUpdatedBooks', JSON.stringify(action.payload));
    },
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
  setLastUpdatedBooks,
  setSearchQuery,
  setGenreFilter,
  setYearFilter,
  setGenres,
  setYears,
} = bookSlice.actions;
export default bookSlice.reducer;
