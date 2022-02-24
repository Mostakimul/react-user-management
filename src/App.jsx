import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="edit-user/:id" element={<EditUser />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
