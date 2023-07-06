import './App.css';
import LoginPage from './components/LoginPage/Login';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginPage/>
  }
])

function App() {
  return <RouterProvider router={router} ></RouterProvider>
}

export default App;
