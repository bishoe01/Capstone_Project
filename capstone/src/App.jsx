import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { RoomContextProvider } from './context/Roomdata';
function App() {
  return (
    <>
    <RoomContextProvider>
    <Header/>
    <Outlet/>
    </RoomContextProvider>
    </>
  );
}

export default App;
