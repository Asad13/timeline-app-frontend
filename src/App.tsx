import { RouterProvider, createBrowserRouter } from 'react-router';
import { DefaultRouter } from './core/routers';

const App = () => {
  const router = createBrowserRouter([...DefaultRouter]);

  return <RouterProvider router={router} />;
};

export default App;
