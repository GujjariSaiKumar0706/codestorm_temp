import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Admin from './components/admin/Admin';
import Instructor from './components/instructor/Instructor';
import Parent from './components/parent/Parent';

function App() {
  let router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/admin',
          element: <Admin />
        },
        {
          path: '/parent',
          element: <Parent />
        },
        {
          path: '/instructor',
          element: <Instructor />
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
