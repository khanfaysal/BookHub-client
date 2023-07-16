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
}

const initialState: BookState = {
  books: [],
  searchQuery: '',
  genreFilter: '',
  yearFilter: '',
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
  },
});

export const { setSearchQuery, setGenreFilter, setYearFilter } = bookSlice.actions;
export default bookSlice.reducer;


// test
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState } from '../../store';
// import { useGetBooksQuery } from './bookApi';

// interface BookState {
//   books: Book[];
//   isLoading: boolean;
//   error: string | null | undefined;
// }

// interface Book {
//   title: string;
//   author: string;
//   genre: string;
//   publicationDate: string;
//   reviews: string[];
// }

// const initialState: BookState = {
//   books: [],
//   isLoading: false,
//   error: null,
// };

// export const fetchBooksAsync = createAsyncThunk<Book[], void, { state: RootState }>(
//   'book/fetchBooks',
//   async () => {
//     // eslint-disable-next-line @typescript-eslint/await-thenable
//     const response = await useGetBooksQuery({});

//     if (response.error) {
//       throw new Error('Failed to fetch books');
//     }

//     return response.data as Book[]; // Specify the return type as Book[]
//   }
// );

// const bookSlice = createSlice({
//   name: 'book',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBooksAsync.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchBooksAsync.fulfilled, (state, action) => {
//         state.books = action.payload;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(fetchBooksAsync.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default bookSlice.reducer;

