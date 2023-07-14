import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutmePage from './pages/AboutmePage';
import StockDetailsPage from './pages/StockDetailsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<StockDetailsPage />} />
        <Route path="/aboutme" element={<AboutmePage />} />
      </Routes>
    </>
  );
}

export default App;
