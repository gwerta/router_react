import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contador from './pages/Contador';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/"> Home </Link> | <Link to="/contador"> Contador </Link> 
    </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contador" element={<Contador />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;