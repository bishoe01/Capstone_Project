import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { RoomContextProvider } from './context/Roomdata';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store';

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
