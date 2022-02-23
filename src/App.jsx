import { Route, Routes } from 'react-router-dom';
import AddUser from './pages/AddUser';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
