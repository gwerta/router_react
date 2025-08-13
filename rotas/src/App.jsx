import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contador from './pages/Contador';
import Usuarios from './pages/Usuarios';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/"> Home </Link> | <Link to="/contador"> Contador </Link> | <Link to="/usuarios"> Usuários </Link>
    </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contador" element={<Contador />} />
    <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;