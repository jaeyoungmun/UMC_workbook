import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/home';
import MoviePage from './pages/movies';
import NotFound from './pages/not-found';
import RootLayout from './layout/root-layout';


const router = createBrowserRouter([
  {
    path: '/',
    // element: <HomePage/>,
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "movies",
        element: <MoviePage/>
      }
    ]
  },
  // {
  //   path: '/movies',
  //   element: <MoviePage/>
  // }
])


function App() {
  return <RouterProvider router= {router}/>
};

export default App