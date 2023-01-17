import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import Reserve from './pages/Reserve';
import TimeSelect from './pages/TimeSelect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, path: '/', element:
            <Home />
      },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      {path:'reserve', element:<Reserve/>},
      {path : 'reserve/:department', element: <TimeSelect/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
