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
    <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px" }}>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{bookData.title}</h2>
        <p className="text-gray-600 mb-2">{bookData.author}</p>
        <p className="text-gray-600 mb-2">{bookData.genre}</p>
        <p className="text-gray-600">{bookData.publicationDate}</p>
        {/* <div className="flex justify-between mt-4">
          <button
            onClick={() => handleEdit(bookData.title)}
            style={{ backgroundColor: '#8A89ED', color: '#ffffff' }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(bookData.title)}
            style={{ backgroundColor: '#EF4444', color: '#ffffff' }}
            className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-600"
          >
            Delete
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default BookCard;
