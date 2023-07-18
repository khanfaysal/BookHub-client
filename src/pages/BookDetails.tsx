import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDeleteBookMutation, useSingleBookQuery } from '../redux/features/books/bookApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book } = useSingleBookQuery(id);

  const [deleteBook, {}] = useDeleteBookMutation();


  const handleDelete = async () => {
    try {
      if (book?.data?.title) {
        // Call the deleteBook mutation to delete the book
        await deleteBook(id).unwrap();

        // Show success toast notification
        toast.success('Book deleted successfully');

        // Navigate to the home page
        navigate('/books');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      toast.error('Failed to delete book');
    }
  };

  if (!book?.data) {
    return <div>Loading...</div>; // Or render a loading indicator
  }

  return (
    <div className="container mx-auto flex pt-5">
      <div className="w-3/12">
        <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }}>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{book.data.title}</h2>
            <p className="text-gray-600 mb-2">{book.data.author}</p>
            <p className="text-gray-600 mb-2">{book.data.genre}</p>
            <p className="text-gray-600">{book.data.publicationDate}</p>
            <ul className="space-y-1 text-lg">
              {book.data.reviews.map((review: string) => (
                <li key={review}>{review}</li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <Link
                to={`/books/edit/${id}`}
                style={{ backgroundColor: '#8A89ED', color: '#ffffff' }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                style={{ backgroundColor: '#EF4444', color: '#ffffff' }}
                className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
