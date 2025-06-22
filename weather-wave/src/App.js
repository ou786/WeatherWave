import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      navigate('/', { replace: true });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <div className="flex gap-4">
          <button onClick={handleHomeClick} className="hover:underline">
            Home
          </button>
          <Link to="/favorites" className="hover:underline">
            Favorites
          </Link>
        </div>
      </nav>

      <Routes>
<Route path="/" element={<Home key={location.key} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
