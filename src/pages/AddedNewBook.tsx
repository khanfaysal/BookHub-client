
import addBook from '../assets/addbook.jpg';
import AddBookForm from '../components/AddBookForm';

function AddedNewBook() {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2">
        <img className="w-full h-auto" src={addBook} alt="Relevant Image" />
      </div>
      <div className="lg:w-1/2" >
        <AddBookForm />
      </div>
    </div>
  );
}

export default AddedNewBook;
