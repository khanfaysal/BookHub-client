import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from '../components/BookCard';
import Footer from '../layouts/Footer';
import { useGetBooksQuery } from '../redux/features/books/bookApi';
import { setSearchQuery, setGenreFilter, setYearFilter } from '../redux/features/books/bookSlice';
import { RootState } from '../redux/store';
import { IBook } from '../types/globalTypes';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

function Books() {
  const { data, error, isLoading } = useGetBooksQuery({});
  console.log(data, "data")
  const [searchQuery, setSearchQueryLocal] = useState('');
  const [genreFilter, setGenreFilterLocal] = useState('');
  const [yearFilter, setYearFilterLocal] = useState('');

  const dispatch = useDispatch();
  const { books } = useSelector((state: RootState) => state.book);
 

  const handleSearchQueryChange = (value: string) => {
    setSearchQueryLocal(value);
    dispatch(setSearchQuery(value));
  };

  const handleGenreFilterChange = (value: string) => {
    setGenreFilterLocal(value);
    dispatch(setGenreFilter(value));
  };

  const handleYearFilterChange = (value: string) => {
    setYearFilterLocal(value);
    dispatch(setYearFilter(value));
  };

  const filteredBooks = books.filter((book) => {
    // Apply genre filter
    if (genreFilter && book.genre !== genreFilter) {
      return false;
    }

    // Apply year filter
    if (yearFilter && new Date(book.publicationDate).getFullYear().toString() !== yearFilter) {
      return false;
    }

    // Apply search query
    if (
      searchQuery &&
      !(
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }

    return true;
  });

  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => handleSearchQueryChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <select
          value={genreFilter}
          onChange={(e) => handleGenreFilterChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">All Genres</option>
          <option value="Genre 1">Genre 1</option>
          <option value="Genre 2">Genre 2</option>
          <option value="Genre 3">Genre 3</option>
          <option value="Genre 4">Genre 4</option>
        </select>
        <select
          value={yearFilter}
          onChange={(e) => handleYearFilterChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ml-4"
        >
          <option value="">All Years</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {(error as FetchBaseQueryError).status}</p>
        ) : filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book) => <BookCard key={book.author} bookData={book} />)
        )}
      </div>
      <Footer />
    </section>
  );
}

export default Books;