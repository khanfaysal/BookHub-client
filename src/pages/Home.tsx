import Footer from "../layouts/Footer";

function Home() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Title 1</h2>
      <p className="text-gray-600 mb-2">Author 1</p>
      <p className="text-gray-600 mb-2">Genre 1</p>
      <p className="text-gray-600">Publication Date 1</p>
    </div>
  </div>


  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Title 2</h2>
      <p className="text-gray-600 mb-2">Author 2</p>
      <p className="text-gray-600 mb-2">Genre 2</p>
      <p className="text-gray-600">Publication Date 2</p>
    </div>
  </div>


  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Title 3</h2>
      <p className="text-gray-600 mb-2">Author 3</p>
      <p className="text-gray-600 mb-2">Genre 3</p>
      <p className="text-gray-600">Publication Date 3</p>
    </div>
  </div>


  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Title 4</h2>
      <p className="text-gray-600 mb-2">Author 4</p>
      <p className="text-gray-600 mb-2">Genre 4</p>
      <p className="text-gray-600">Publication Date 4</p>
    </div>
  </div>
      </div>

      <Footer />
    </section>
  );
}

export default Home;
