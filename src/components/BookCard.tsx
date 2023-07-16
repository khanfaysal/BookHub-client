import { IBook } from "../types/globalTypes";

interface IProps {
  bookData: IBook;
}

function BookCard({ bookData }: IProps) {
  const handleEdit = (title: string) => {
    // Handle edit functionality for the book with the given title
    console.log("Edit:", title);
  };

  const handleDelete = (title: string) => {
    // Handle delete functionality for the book with the given title
    console.log("Delete:", title);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{bookData.title}</h2>
        <p className="text-gray-600 mb-2">{bookData.author}</p>
        <p className="text-gray-600 mb-2">{bookData.genre}</p>
        <p className="text-gray-600">{bookData.publicationDate}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => handleEdit(bookData.title)}
            style={{ backgroundColor: '#blue-500', color: '#ffffff' }} 
            className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600" 
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(bookData.title)}
            style={{ backgroundColor: '#red-500', color: '#ffffff' }}
            className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-600" 
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
