import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './views/client/home';

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
