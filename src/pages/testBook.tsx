// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import BookCard from '../components/BookCard';
// import Footer from '../layouts/Footer';
// import { useGetBooksQuery } from '../redux/features/books/bookApi';
// import { setSearchQuery, setGenreFilter, setYearFilter } from '../redux/features/books/bookSlice';
// import { RootState } from '../redux/store';
// import { IBook } from '../types/globalTypes';
// import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

// function Books() {
//   const { data, error, isLoading } = useGetBooksQuery({});
//   console.log(data, "data")
//   const [searchQuery, setSearchQueryLocal] = useState('');
//   const [genreFilter, setGenreFilterLocal] = useState('');
//   const [yearFilter, setYearFilterLocal] = useState('');

//   const dispatch = useDispatch();
//   const { books } = useSelector((state: RootState) => state.book);
 

//   const handleSearchQueryChange = (value: string) => {
//     setSearchQueryLocal(value);
//     dispatch(setSearchQuery(value));
//   };

//   const handleGenreFilterChange = (value: string) => {
//     setGenreFilterLocal(value);
//     dispatch(setGenreFilter(value));
//   };

//   const handleYearFilterChange = (value: string) => {
//     setYearFilterLocal(value);
//     dispatch(setYearFilter(value));
//   };

//   const filteredBooks = books.filter((book) => {
//     // Apply genre filter
//     if (genreFilter && book.genre !== genreFilter) {
//       return false;
//     }

//     // Apply year filter
//     if (yearFilter && new Date(book.publicationDate).getFullYear().toString() !== yearFilter) {
//       return false;
//     }

//     // Apply search query
//     if (
//       searchQuery &&
//       !(
//         book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         book.genre.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     ) {
//       return false;
//     }

//     return true;
//   });

//   return (
//     <section className="container mx-auto">
//       <div className="flex items-center justify-center mt-10">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={(e) => handleSearchQueryChange(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="flex items-center justify-center mt-4">
//         <select
//           value={genreFilter}
//           onChange={(e) => handleGenreFilterChange(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         >
//           <option value="">All Genres</option>
//           <option value="Genre 1">Genre 1</option>
//           <option value="Genre 2">Genre 2</option>
//           <option value="Genre 3">Genre 3</option>
//           <option value="Genre 4">Genre 4</option>
//         </select>
//         <select
//           value={yearFilter}
//           onChange={(e) => handleYearFilterChange(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ml-4"
//         >
//           <option value="">All Years</option>
//           <option value="2021">2021</option>
//           <option value="2022">2022</option>
//           <option value="2023">2023</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p>Error: {(error as FetchBaseQueryError).status}</p>
//         ) : filteredBooks.length === 0 ? (
//           <p>No books found.</p>
//         ) : (
//           filteredBooks.map((book) => <BookCard key={book.author} bookData={book} />)
//         )}
//       </div>
//       <Footer />
//     </section>
//   );
// }

// export default Books;


// import React from 'react';
// import { useForm } from 'react-hook-form';

// function AddBookForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
//               Title
//             </label>
//             <input
//               className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="title"
//               type="text"
//               placeholder="Enter title"
//               {...register('title', { required: true })}
//             />
//             {errors.title && <p className="text-red-500 text-xs italic">Title is required</p>}
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="author">
//               Author
//             </label>
//             <input
//               className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="author"
//               type="text"
//               placeholder="Enter author"
//               {...register('author', { required: true })}
//             />
//             {errors.author && <p className="text-red-500 text-xs italic">Author is required</p>}
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="genre">
//               Genre
//             </label>
//             <input
//               className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="genre"
//               type="text"
//               placeholder="Enter genre"
//               {...register('genre', { required: true })}
//             />
//             {errors.genre && <p className="text-red-500 text-xs italic">Genre is required</p>}
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="publicationDate">
//               Publication Date
//             </label>
//             <input
//               className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="publicationDate"
//               type="date"
//               placeholder="Select publication date"
//               {...register('publicationDate', { required: true })}
//             />
//             {errors.publicationDate && <p className="text-red-500 text-xs italic">Publication date is required</p>}
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="reviews">
//               Reviews
//             </label>
//             <textarea
//               className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="reviews"
//               placeholder="Enter reviews (separate with commas)"
//               {...register('reviews', { required: true })}
//             ></textarea>
//             {errors.reviews && <p className="text-red-500 text-xs italic">Reviews are required</p>}
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image">
//               Image
//             </label>
//             <input
//               className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="image"
//               type="file"
//               {...register('image', { required: true })}
//             />
//             {errors.image && <p className="text-red-500 text-xs italic">Image is required</p>}
//           </div>
//         </div>
//         <div className="flex items-center justify-center">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Add Book
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddBookForm;
