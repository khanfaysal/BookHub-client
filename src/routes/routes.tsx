import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Books from '../pages/Books';
import BookDetails from '../pages/BookDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import EditBook from '../pages/EditBook';
import PrivateRoute from './PrivateRoute';
import AddedNewBook from '../pages/AddedNewBook';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <PrivateRoute><Books /></PrivateRoute>,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/books-edit',
        element: <PrivateRoute><EditBook /></PrivateRoute>,
      },
      {
        path: '/books-create',
        element: <AddedNewBook />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
