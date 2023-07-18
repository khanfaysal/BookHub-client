
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePostBookMutation } from '../redux/features/books/bookApi';


function AddBookForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [postBook, { isLoading}] = usePostBookMutation();
  console.log([postBook], "from post book")


  const onSubmit = async (data: any) => {
    const newData = {
      ...data,
      reviews: [data.reviews]
    }

    try {
      // Perform form submission logic here
      console.log(newData, 'add new book data');

      // Call the postBook mutation to create a new book
      await postBook({data: newData}).unwrap();

      // Show success toast notification
      toast.success('Book successfully created');

    } catch (error) {
      console.error('Error creating book:', error);
      toast.error('Failed to create book');
    }
  };

  return (
    <div className="flex justify-center items-center pt-5">
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="title"
              type="text"
              placeholder="Enter title"
              {...register('title', { required: true })}
            />
            {errors.title && <p className="text-red-500 text-xs italic">Title is required</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="author">
              Author
            </label>
            <input
              className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="author"
              type="text"
              placeholder="Enter author"
              {...register('author', { required: true })}
            />
            {errors.author && <p className="text-red-500 text-xs italic">Author is required</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="genre">
              Genre
            </label>
            <input
              className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="genre"
              type="text"
              placeholder="Enter genre"
              {...register('genre', { required: true })}
            />
            {errors.genre && <p className="text-red-500 text-xs italic">Genre is required</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="publicationDate">
              Publication Date
            </label>
            <input
              className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="publicationDate"
              type="date"
              placeholder="Select publication date"
              {...register('publicationDate', { required: true })}
            />
            {errors.publicationDate && <p className="text-red-500 text-xs italic">Publication date is required</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="reviews">
              Reviews
            </label>
            <textarea
              className="appearance-none block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="reviews"
              placeholder="Enter reviews (separate with commas)"
              {...register('reviews', { required: true })}

            ></textarea>
            {errors.reviews && <p className="text-red-500 text-xs italic">Reviews are required</p>}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: '#8A89ED', color: '#ffffff' }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;
