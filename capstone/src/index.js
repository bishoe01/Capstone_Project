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
import Profile from './pages/profile/Profile';
import PlaceRental from './pages/reservation/PlaceRental';
import ReservationDetail from './pages/ReservationDetail';

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
      { path: 'profile', element: <Profile /> },
      { path: 'placerental', element: <PlaceRental /> },
      {
        path: 'login',
        element: (
          <Layout>
            <Login />
          </Layout>
        ),
      },
      { path: 'reserve/:department', element: <TimeSelect /> },
      { path: 'reserve/:department/:room', element: <ReservationDetail /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
