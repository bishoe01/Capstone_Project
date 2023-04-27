import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Layout from './layout/Layout';
import TimeSelect from './pages/TimeSelect';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import Profile from './pages/Profile';
import PlaceRental from './pages/ReservationHistory';
import ReservationHistory from './pages/ReservationDetail';
import Notice from './pages/Notice';
import { UserProvider } from './context/UserData';

import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'register/registered',
        element: <RegisterSuccess />,
      },
      {
        path: 'dashboard',
        element: (
          <UserProvider>
            <Dashboard />
          </UserProvider>
        ),
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
          { path: 'placerental', element: <PlaceRental /> },
          { path: 'notice', element: <Notice /> },
        ],
      },

      {
        path: 'login',
        element: (
          <Layout>
            <Login />
          </Layout>
        ),
      },

      { path: 'about', element: <h1>about</h1> },
      { path: 'Contact', element: <h1>contact</h1> },
      { path: 'reserve/:department', element: <TimeSelect /> },
      {
        path: 'reserve/:department/:room',
        element: <ReservationHistory />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
