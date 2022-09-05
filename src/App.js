import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddEditUser />} />
        <Route path="/edit-user/:id" element={<AddEditUser />} />
        <Route path="/user-info/:id" element={<UserInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
