import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutmePage from './pages/AboutmePage';
import StockDetailsPage from './pages/StockDetailsPage';
import OverviewDetails from './components/OverviewDetails';
import FundamentalsDetails from './components/FundamentalsDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":symbol" element={<StockDetailsPage />}>
          <Route path="overview" element={<OverviewDetails />} />
          <Route path="fundamentals" element={<FundamentalsDetails />} />
        </Route>
        <Route path="aboutme" element={<AboutmePage />} />
      </Routes>
    </>
  );
}

export default App;
