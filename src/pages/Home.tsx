import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import Footer from '../layouts/Footer';
import { IBook } from '../types/globalTypes';

interface RootState {
  book: {
    lastUpdatedBooks: IBook[];
  };
}

function Home() {
  const { lastUpdatedBooks } = useSelector((state: RootState) => state.book);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {lastUpdatedBooks.map((book: IBook) => (
          <BookCard key={book.author} bookData={book} />
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Home;
