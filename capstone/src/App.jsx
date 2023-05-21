import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { RoomContextProvider } from './context/Roomdata';
import { Provider } from 'react-redux';
import store from './redux/store';
// import ReactGA from 'react-ga4';

// const TRACKING_ID = 'G-8K7CMBJN7J';
// ReactGA.initialize(TRACKING_ID);
// ReactGA.send({ hitTpe: 'pageview', page: '/' });

function App() {
  return (
    <>
      <RoomContextProvider>
        <Provider store={store}>
          <Header />
          <Outlet />
        </Provider>
      </RoomContextProvider>
    </>
  );
}

export default App;