import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './Components/Layout/MainLayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Polling from './Pages/Polling';
import Recipes from './Pages/Recipes';
import IndividualRecipes from './Pages/IndividualRecipes';
import IniniteScroll from './Pages/IniniteScroll';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'stock',
        element: <Polling />,
      },
      {
        path: '/foodRecipe',
        element: <Recipes />,
      },
      {
        path: '/foodRecipe/:RecipeId',
        element: <IndividualRecipes />,
      },
      {
        path: 'infinitescroll',
        element: <IniniteScroll />,
      },
    ],
  },
]);

function App() {
  const queryclient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
export default App;
